import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BookTable } from './components/book-table';
import { BookForm } from './components/book-form';

const executeQuery = (query, variables = null, operationName = null) =>
  fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables,
      operationName
    }),
  }).then(res => res.json());


const insertBook = insertBook => {
  return executeQuery(`
    mutation InsertBook($insertBook: InsertBookInputType) {
      insertBook(book: $insertBook) {
        id
        title
      }
    }
  `, JSON.stringify({ insertBook }), 'InsertBook').then(() => refreshBooks());
};

const refreshBooks = () => {
  executeQuery(`
    query GetBooks {
      ...BookFormGenres
      ...BookFormAuthors
      ...BookTableGenres
      ...BookTableBooks
    }

    ${BookTable.fragments.books}
    ${BookTable.fragments.genres}
    ${BookForm.fragments.genres}
    ${BookForm.fragments.authors}
  `).then(results => {
    ReactDOM.render(
      <div>
        <BookTable books={results.data.books} genres={results.data.genres.options} />
        <BookForm authors={results.data.authors}
          genres={results.data.genres.options} onSaveBook={insertBook} />
      </div>, document.querySelector('main'));
  });
};

refreshBooks();




