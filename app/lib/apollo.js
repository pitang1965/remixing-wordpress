import { ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://software.pitang1965.com/graphql',
    cache: new InMemoryCache()
})