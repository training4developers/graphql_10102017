import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BookTable } from './components/book-table';

const getBooksGraphQL = {
  query: `
    query GetBooks {
      books {
        ...BookTable
      }
    }
  
    ${BookTable.fragment}
  `,
  variables: null,
  operation: 'GetBooks',
};

fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(getBooksGraphQL),
})
  .then(res => res.json())
  .then(results => {
    ReactDOM.render(<BookTable books={results.data.books} />, document.querySelector('main'));
  });


