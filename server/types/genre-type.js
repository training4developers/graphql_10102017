import { GraphQLEnumType } from 'graphql';

export const genreType = new GraphQLEnumType({
  name: 'GenreType',
  values: {
    FICTION: { value: 1},
    NONFICTION: { value: 2 },
    REFERENCE: { value: 3 },
    MAGAZINE: { value: 4 },
  },
});