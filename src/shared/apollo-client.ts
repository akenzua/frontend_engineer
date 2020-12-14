import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer 5189c3b665a5fa838d7631f61b90ef4589f731d2`
    }
});


export default client;