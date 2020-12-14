import React from 'react';
import { render, screen } from '@testing-library/react';

import Repos from '../../components/repo/repos.component';

test('renders learn react link', () => {
    const props = [{
      node: {
        name: "react",
        stargazerCount: 203,
        forkCount: 354
      }
    }]
    render(<Repos repos={props}/>);
    const linkElement = screen.getByText(/List of React repositoires/i);
    expect(linkElement).toBeInTheDocument();
  });