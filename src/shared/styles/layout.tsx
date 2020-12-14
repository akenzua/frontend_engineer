import styled from 'styled-components';

export const TableContainer = styled.table`
    width: 700px;
    border: 1px solid #f8f9f9;
    border-collapse: collapse;
    border-radius: 2px;
    margin: 0 auto;
`;

export const TableHead = styled.thead`
    width: 100%;
    text-align: left;
    background: #f8f9f9;
`;

export const TableRow = styled.tr`
width: 100%;

`;

export const TableHeader = styled.th`
width: 40%;
padding: 10px 30px;
`;

export const TableData = styled.td`
width: 40%;
padding: 10px 30px;
border: none;
text-transform: capitalize;
`;
export const TableBody = styled.tbody`
    width: 100%;
    &:nth-child(odd) {
        background: #f8f9f9;
    }
`;

