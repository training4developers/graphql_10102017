import {
  GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList,
} from 'graphql';

import { bookType } from './book-type';
import { personInterfaceType } from './person-interface-type';

import { getBooksByAuthorId } from '../database';

export const authorType = new GraphQLObjectType({

  name: 'AuthorType',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    books: {
      type: new GraphQLList(bookType),
      resolve: ({ id: authorId }) => {
        return getBooksByAuthorId(authorId);
      }
    },
  }),
  interfaces: [ personInterfaceType ]

});