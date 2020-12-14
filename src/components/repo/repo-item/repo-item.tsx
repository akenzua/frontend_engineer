import React from 'react';
import { Repo } from '../../../shared/interfaces/repo.interface';


const RepoItem: React.FC< {repo: Repo}> = ({repo}: {repo: Repo}) => {
    return(
        <div>
            <div>{repo.node.name}</div>
            <div>{repo.node.stargazerCount}</div>
            <div>{repo.node.forkCount}</div>
        </div>
    );
}

export default RepoItem; 