import {
  GraphQLSchema, GraphQLObjectType, GraphQLString,
  GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID
} from 'graphql';

export const schema = new GraphQLSchema({
  
  query: new GraphQLObjectType({

    name: 'Query',
    description: 'Top-level query object type for our GraphQL server',
    fields: {
      message: {
        type: GraphQLString,
        description: 'A greeting',
        resolve: () => {
          return 'Hello World!';
        },
      },
      messageCode: {
        type: GraphQLInt,
        description: 'A numeric code for the message',
        resolve: () => 2,
      },
      sampleFloat: {
        type: GraphQLFloat,
        description: 'An example of a float',
        resolve: () => 4.56,
      },
      sampleBoolean: {
        type: GraphQLBoolean,
        description: 'A sample of a boolean',
        resolve: () => true,
      },
      sampleID: {
        type: GraphQLID,
        description: 'A sample of an ID',
        resolve: () => 1,
      }
    },

  }),

});