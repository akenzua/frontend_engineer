import React from 'react';
import Repos from '../components/repo/repos.component';
import { useGetRepos } from '../hooks/repos/useGetRepos'

const Home: React.FC = () => {
const repos = useGetRepos();   
    return (
        <Repos repos={repos || []} />   
    );
}

export default Home;

