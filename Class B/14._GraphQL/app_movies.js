import express from "express"
const app = express()

let movieId = 4;
const movies = [
{ id: 1, title: "The Unbearable Weight of Massive Talent", actorIds: [1] },
{ id: 2, title: "Pig", actorIds: [1] },
{ id: 3, title: "One Flew Over the Cuckoo's Nest", actorIds: [2] },
{ id: 4, title: "Junior", actorIds: [2, 3] },
];
 
let actorId = 3;
const actors = [
{ id: 1, name: "Nicolas Cage" },
{ id: 2, name: "Danny DeVito" },
{ id: 3, name: "Arnold Schwarzenegger" },
];

import {graphqlHTTP} from "express-graphql"
import { graphql, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql"

const ActorType = new GraphQLObjectType({
    name: "ActorType",
    description: "The actor type",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        movies: {
            type: new GraphQLList(MovieType), //RETURN TYPE
            resolve: (actor) => {
                return movies.filter(movie => movie.actorIds.includes(actor.id))
            }
        }
    })
})

const MovieType = new GraphQLObjectType({
    name: "MovieType",
    description: "A movie",
    fields: () =>  ({
        id: { type :GraphQLInt },
        title: { type: GraphQLString },
        actorIds: { type: new GraphQLList(GraphQLInt)},
        actors: { 
            type: new GraphQLList(ActorType),
            resolve: (movie) => {
                return movie.actorIds.map(actorId => actors.find(actor => actor.id === actorId))
            }
        }
    })
})

const RootMutationType = new GraphQLObjectType({
    name: "RootMutationType",
    description: "The root mutation type",
    fields: {
        addActor: {
            type: ActorType,
            description: "Creates a new actor",
            args: {
                name: { type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent,args) => {
                const actor = {
                    id: ++actorId,
                    name: args.name
                }
                actors.push(actor)
                return actor
            }
        },
        addMovie: {
            type: MovieType,
            description: "Creates a new movie",
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                actorIds: { type: new GraphQLList(GraphQLInt) }
            },
            resolve: (parent,{title, actorIds}) => { //destructoring
                const foundActorIds = actorIds.map( //checks if actor is in "database".
                    actorId => actors.find(
                        actor => actor.id === actorId))
                if (foundActorIds.includes(undefined)){
                    return ;
                }        

                const movie = {
                    id: ++movieId,
                    title,
                    actorIds: actorIds //the key is defined, but the value might be undefined
                }
                movies.push(movie)
                return movie
            }
        }
    }
})

const RooTQueryType = new GraphQLObjectType({
    name: "RootQueryType",
    description: "The Root Query Type",
    fields: {
        movies: {
            type: new GraphQLList(MovieType),
            description: "Get all movies",
            resolve: () => movies //HER SKAL DU KALDE DIN DATABASE ISTEDET FOR AT HAVE ET ARRAY KLAR
        },
        actors: {
            type: new GraphQLList(ActorType),
            description: "Get all actors",
            resolve: () => actors
        },
        actorById: {
            type: ActorType,
            description: "A selected actor",
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt)}
            }, // vi bruger ikke parent her, men args er det 2. argument.. parent kunne være "_"
            resolve: (parent,args) => actors.find(actor => actor.id === args.id)
        }
    }    
})

const schema = new GraphQLSchema({
    query: RooTQueryType,
    mutation: RootMutationType
})

app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema //kunne forkortes, men for klarhedensskyld.
    
}))



app.listen(3000)
