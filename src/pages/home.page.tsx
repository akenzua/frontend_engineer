import React from 'react';
import Repos from '../components/repo/repos.component';
import { Repo } from '../shared/interfaces/repo.interface';

const Home: React.FC = () => {

const repo = [{
    node: {
        name: "AJ",
        stargazerCount: 122323,
        forkCount: 34242
    }
}]
   
    return (
        <Repos repos={repo || []} />   
    );
}

export default Home;

