import { ApolloServer } from '@apollo/server';
const { ApolloGateway, IntrospectAndCompose, LocalGraphQLDataSource, RemoteGraphQLDataSource } = require('@apollo/gateway');

const typeDefs = `#graphql    
    type Book {
        title: String
        author: String
    }

    type Query {
        hello: String
    }
`;

// Implement resolvers for your schema
const resolvers = {
    Query: {
        hello: () => 'Hello, world!',
    },
};

// Create an Apollo Server instance with your custom schema and resolvers
export default new ApolloServer({
    typeDefs,
    resolvers,
});

  // const executor = async ({ document, variables }) => {
  //   const query = print(document);
  //   const fetchResult = await fetch("https://countries.trevorblades.com/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ query, variables }),
  //   });
  //   return fetchResult.json();
  // };
  
  // const getCountriesSchema = async () => {
  //   const schema = wrapSchema({
  //     schema: await introspectSchema(executor),
  //     executor,
  //   });
  //   return transformSchemaFederation(schema, {
  //     Query: {
  //       extend: true,
  //     },
  //   });
  // };

  // var gateway = new ApolloGateway({
  //   supergraphSdl: new IntrospectAndCompose({
  //     subgraphs: [
  //       { name: 'countries', url: 'https://countries.trevorblades.com/' },
  //     ],
  //   }),
  //   buildService: ({ url }) => {
  //     if (url === "https://countries.trevorblades.com/") {
  //       return new LocalGraphQLDataSource(getCountriesSchema());
  //     } else {
  //       return new RemoteGraphQLDataSource({
  //         url,
  //       });
  //     }
  //   },
  // });

  // var apollo = new ApolloServer({ gateway });
  