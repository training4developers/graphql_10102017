import {
  GraphQLObjectType, GraphQLInt, GraphQLString,
} from 'graphql';

import { personInterfaceType } from './person-interface-type';

export const studentType = new GraphQLObjectType({

  name: 'StudentType',
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    grade: { type: GraphQLInt },
  }),
  interfaces: [ personInterfaceType ],
});