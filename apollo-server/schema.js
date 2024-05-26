export const typeDefs=`#graphql
type Game{
    id:ID!,
    title:String!,
    platform:[String!]!,

}
type Review{
    id:ID!,
    rating:Int!,
    content:String!,
}
type Author{
    id:ID!,
    name:String!,
    verified:Boolean!,
}
type Query{
    games:[Game],
    reviews:[Review],
    authors:[Author]
}

`


// id:ID, id is type in graphql
// platform:[String], array of strings
// adding exclamation mark to a type makes it required


//type query is used to define entry points to the graph and every schema should have it 