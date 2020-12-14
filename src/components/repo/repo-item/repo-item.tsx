import React from 'react';
import { Repo } from '../../../shared/interfaces/repo.interface';
import { TableData, TableRow } from '../../../shared/styles/layout';



const RepoItem: React.FC< {repo: Repo}> = ({repo}: {repo: Repo}) => {
    return(
        <TableRow>
            <TableData>{repo.node.name}</TableData>
            <TableData>{repo.node.stargazerCount}</TableData>
            <TableData>{repo.node.forkCount}</TableData>
        </TableRow>
    );
}

export default RepoItem; 