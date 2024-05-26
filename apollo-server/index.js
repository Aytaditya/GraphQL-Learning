import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    game(_,args){
        return db.games.find((game)=>game.id === args.id);
    },

  },
    Game:{
        reviews(parent){
            return db.reviews.filter((review)=>review.game_id === parent.id);
        }
    }
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

const port = 4000;
console.log(`Server ready at http://localhost:${port}`);



//resolvers handle any incoming requests and return the appropriate data