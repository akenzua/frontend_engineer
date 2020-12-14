import React, { Fragment } from 'react';
import { Repo } from '../../shared/interfaces/repo.interface';
import RepoItem from './repo-item/repo-item';

interface RepoProps {
    repos: Repo[]
}

const Repos: React.FC<RepoProps> = ({repos}:RepoProps) => {
    return(
        <Fragment>
            <h1>List of React repositoires</h1>
            <div>
                    <div>
                        <div>
                            <div>Names</div>
                            <div>Stars</div>
                            <div>Forks</div>
                        </div>
                    </div>
                    
                    {repos.map((repo, i) => (
                        <div  key={i}>
                            <RepoItem repo={repo} />
                        </div>
                    ))}
                    
             </div>
        </Fragment>
    );
}

export default Repos;