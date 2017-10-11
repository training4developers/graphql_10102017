import { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

import { messageType } from './message-type';
import { bookType } from './book-type';
import { authorType } from './author-type';

import { personType } from './person-type';

import { getAllBooks, getAllAuthors } from '../database';

const messages = [
  { content: 'Internal Server Error', code: 500, level: 3 },
  { content: 'File Not Found', code: 404, level: 3 },
  { content: 'Cached', code: 303, level: 2 },
];

export const query = new GraphQLObjectType({
  
  name: 'Query',
  description: 'Top-level query object type for our GraphQL server',
  fields: {
    messages: {
      type: new GraphQLList(messageType),
      description: 'A list of HTTP message codes.',
      resolve: () => messages,
    },
    message: {
      type: messageType,
      description: 'Find a message by message code.',
      args: {
        code: {
          type: GraphQLInt,
          description: 'The code for the message to find.',
        },
      },
      resolve: (_, args) => messages.find(m => m.code === args.code),
    },
    genres: {
      type: new GraphQLList(GraphQLString),
      resolve: () => ([ 'Fiction', 'Non-Fiction', 'Reference', 'Magazines' ])
    },
    books: {
      type: new GraphQLList(bookType),
      resolve: () => getAllBooks(),
    },
    authors: {
      type: new GraphQLList(authorType),
      resolve: () => getAllAuthors(),
    },
  },

});