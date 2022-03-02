import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { Query } from "./resolvers";
import { typeDefs } from "./schema";

const main = async () => {
  const app = express();

  app.use(
    cors({ origin: "https://studio.apollographql.com", credentials: true })
  );

  const server = new ApolloServer({ typeDefs, resolvers: { Query } });

  await server.start();

  server.applyMiddleware({ app, cors: false });

  app.listen(4000, () => console.log("app started"));
};

main().catch((error) => console.error(error));
