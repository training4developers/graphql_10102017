import { GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql';

import { messageType } from './message-type';
import { bookType } from './book-type';

import { books } from '../database';

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
    books: {
      type: new GraphQLList(bookType),
      resolve: () => books,
    },
  },

});