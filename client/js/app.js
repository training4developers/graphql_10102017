import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BookTable } from './components/book-table';
import { BookForm } from './components/book-form';

const getBooksGraphQL = {
  query: `
    query GetBooks {
      ...BookFormGenres
      ...BookFormAuthors
      books {
        ...BookTable
      }
    }
  
    ${BookTable.fragment}
    ${BookForm.fragments.genres}
    ${BookForm.fragments.authors}
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
    ReactDOM.render(
      <div>
        <BookTable books={results.data.books} />
        <BookForm authors={results.data.authors} genres={results.data.genres} />
      </div>, document.querySelector('main'));
  });


