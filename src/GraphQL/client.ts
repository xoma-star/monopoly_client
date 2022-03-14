import {ApolloClient, InMemoryCache} from "@apollo/client";
import {GRAPHQL, LOCALHOST_SERVER_URL} from "../Constants";

const client = new ApolloClient({
    uri: (process.env.GRAPHQL_SERVER_URL || LOCALHOST_SERVER_URL) + GRAPHQL,
    cache: new InMemoryCache()
})

export default client