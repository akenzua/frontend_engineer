import { gql, useQuery } from "@apollo/client";

const GET_REPOS = gql`
    query SearchReactRepo($query: String!){ 
        search(query:$query, type: REPOSITORY, first: 15){
            
            edges{
            node{
                ... on Repository{
                    name
                    stargazerCount
                    forkCount
                }
            }
            }
        }
    }
`



export const useGetRepos = () => {
    const { data } = useQuery(GET_REPOS, 
        {variables: {query : 'React JS'},
    }
        );
        if(data) return (data.search.edges)
}