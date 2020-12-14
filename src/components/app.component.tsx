import React from 'react';

import { ApolloProvider } from '@apollo/client';
import client from '../shared/apollo-client';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <div>New App</div>
        </ApolloProvider>
    );
}

export default App;