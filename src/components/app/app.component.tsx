import React, { Fragment } from 'react';


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
        <Fragment>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path="/">
                        <Home /> 
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;