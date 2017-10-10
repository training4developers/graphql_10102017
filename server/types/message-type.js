import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

import { messageLevelType } from './message-level-type';

export const messageType = new GraphQLObjectType({

  name: 'MessageType',
  description: 'A system message',
  fields: {
    content: {
      type: GraphQLString,
      description: 'Message content',
      // default implementation of resolve
      resolve: (data, args, context, fieldInfo) => {
        return data[fieldInfo.fieldName];
      },
    },
    code: {
      type: GraphQLInt,
      description: 'Message code',
    },
    level: {
      type: messageLevelType,
      description: 'Message level',
    }
  }

});