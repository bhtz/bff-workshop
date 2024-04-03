# Contributing

## Requirements

* node 18+ SDK
* dotnet 8 SDK
* docker engine

## Building documentation

> Open documentation using mdbook

```console
cd ./doc
mdbook serve -p 5555
```

## IAC

```console
cd ./IAC
docker-compose up
```

Go to [keycloak realm admin](http://localhost:8083/admin/master/console/#/microscope/clients) & regenerate clientSecret for "boilerplate" client

* [keycloak realm admin](http://localhost:8083/admin/master/console/#/microscope/clients)
    * Credentials
        * Client secret > Regenerate

Then set all your config file with this secret

## Blazor

```console
cd ./src/blazor/Microscope.Boilerplate.Clients.BFF
dotnet run
```

## Angular

```console
cd ./src/angular
npm run dev
```

## Nuxt

```console
cd ./src/nuxt
npm run dev
```

## Nextjs

```console
cd ./src/next
npm run dev
```