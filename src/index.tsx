import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './components/app/app.component';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
      authorization: `Bearer 5189c3b665a5fa838d7631f61b90ef4589f731d2`
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);









