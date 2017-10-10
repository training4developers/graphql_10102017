import {
  GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat,
} from 'graphql';

import { authorType } from './author-type';

import { authors } from '../database';

export const bookType = new GraphQLObjectType({

  name: 'BookType',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    pageCount: { type: GraphQLInt },
    price: { type: GraphQLFloat },
    author: {
      type: authorType,
      resolve: (bookObj) => {
        return authors.find(a => a.id === bookObj.authorId);
      },
    },
  }),

});