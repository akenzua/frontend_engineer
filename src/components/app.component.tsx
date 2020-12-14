import React from 'react';

import { ApolloProvider } from '@apollo/client';
import client from '../shared/apollo-client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home.page';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route path="/">
                        <Home /> 
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;