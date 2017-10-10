import { GraphQLSchema, GraphQLString, GraphQLObjectType } from 'graphql';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Query object',
    fields: {
      message: {
        type: GraphQLString,
        description: 'Greeting message',
        resolve: () => {
          return 'Hello World!';
        }
  
      }
    },
  })
});
