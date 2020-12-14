import React, { Fragment } from 'react';
import { Repo } from '../../shared/interfaces/repo.interface';
import { TableBody, TableContainer,  TableHead, TableHeader, TableRow } from '../../shared/styles/layout';
import RepoItem from './repo-item/repo-item';

interface RepoProps {
    repos: Repo[]
}

const Repos: React.FC<RepoProps> = ({repos}:RepoProps) => {
    return(
        <Fragment>
            <h1>List of React repositoires</h1>
            <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableHeader>Names</TableHeader>
                            <TableHeader>Stars</TableHeader>
                            <TableHeader>Forks</TableHeader>
                        </TableRow>
                    </TableHead>
                    
                    {repos.map((repo, i) => (
                        <TableBody  key={i}>
                            <RepoItem repo={repo} />
                        </TableBody>
                    ))}
                    
             </TableContainer>
        </Fragment>
    );
}

export default Repos;