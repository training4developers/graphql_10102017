import fetch from 'node-fetch';

// export const authors = [
//   { id: 1, firstName: 'Dhanya', lastName: 'Ramesh' },
//   { id: 2, firstName: 'David', lastName: 'LeRoy' },
// ];

// export const books = [
//   { id: 1, title: 'A cool book', genre: 'fiction', pageCount: 100, price: 10.00, authorId: 2 },
//   { id: 2, title: 'A bad book', genre: 'non-fiction', pageCount: 130, price: 5.00, authorId: 1 },
//   { id: 3, title: 'A new book', genre: 'reference', pageCount: 200, price: 15.00, authorId: 2 },
// ];


export const getAllBooks = () => fetch('http://localhost:3010/books')
  .then(res => res.json());

export const getAllAuthors = () => fetch('http://localhost:3000/api/authors')
  .then(res => res.json());

export const getBooksByAuthorId = authorId => {
  return fetch('http://localhost:3010/books')
    .then(res => res.json())
    .then(books => books.filter(b => b.authorId === authorId));
};

export const getAuthorById = authorId => {
  return fetch(`http://localhost:3010/authors/${authorId}`).then(res => res.json());
};

export const insertBook = book => {

  delete book.id;

  return fetch('http://localhost:3010/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  }).then(res => res.json());
};