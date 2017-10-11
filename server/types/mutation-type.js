import { GraphQLObjectType } from 'graphql';

import { insertBookInputType } from './book-input-type';
import { bookType } from './book-type';

import { insertBook } from '../database';

// mutation InsertBook($insertBook: InsertBookInputType) {
//   insertBook(book: $insertBook) {
//     id
//     title
//     author {
//       firstName
//     }
//   }
// }

// {
//   "insertBook": {
//     "title": "New Book 2",
//     "genre": "FICTION",
//     "pageCount": 100,
//     "price": 12.31,
//     "authorId": 3
//   }
// }

export const mutation = new GraphQLObjectType({

  name: 'Mutation',
  description: 'Endpoint for performing mutations',

  fields: () => ({
    insertBook: {
      args: {
        book: {
          type: insertBookInputType
        },
      },
      type: bookType,
      resolve: (_, { book }) => {
        return insertBook(book);
      }
    },
  }),

});