import {
  GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList,
} from 'graphql';

import { bookType } from './book-type';

import { books } from '../database';

export const authorType = new GraphQLObjectType({

  name: 'AuthorType',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    books: {
      type: new GraphQLList(bookType),
      resolve: (authorObj) => {
        return books.filter(b => b.authorId === authorObj.id);
      }
    },
  }),

});