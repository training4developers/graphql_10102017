import {
  GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat,
} from 'graphql';

import { authorType } from './author-type';

import { getAuthorById } from '../database';

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
      resolve: ({ authorId }) => getAuthorById(authorId),
    },
  }),

});