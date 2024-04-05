import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import proxy from 'express-http-proxy';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import graphQlServer from './graphql';
import config from 'config';
import { FeatureFlagResponse } from './src/app/services/feature-flags.service';

// The Express app is exported so that it can be used by serverless Functions.
export async function app(): Promise<express.Express> {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  // mount graphql gateway
  const apollo = graphQlServer;
  await apollo.start()

  server.use('/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(apollo)
  );

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // REST API Proxy
  server.use('/api', proxy('https://jsonplaceholder.typicode.com'));

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  server.get('/version', (req, res) => {
    res.json({ version: '1.0.0' })
  })

  server.get('/features', (req, res) => {
    let configs = config.get('FeatureManagement') as FeatureFlagResponse;
    res.json(configs);
  })

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['SSR_PORT'] || 4200;

  app().then((server) => {
    server.listen(port, () => {
      console.log(`BFF listening on http://localhost:${port}`);
    });
  });
}

run();
