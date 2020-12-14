import React from 'react';

import { ApolloProvider } from '@apollo/client';
import client from '../../shared/apollo-client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../pages/home.page';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        color: #515252;
        font-family: Verdana, sans-serif;
        display: flex;
        justify-content: center;
    }

`;

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <GlobalStyle />
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