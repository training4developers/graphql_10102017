import { GraphQLEnumType } from 'graphql';

export const messageLevelType = new GraphQLEnumType({
  name: 'MessageLevelType',
  values: {
    DEBUG: { value: 1},
    WARNING: { value: 2 },
    ERROR: { value: 3},
  },
});