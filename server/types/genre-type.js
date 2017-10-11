import { GraphQLEnumType } from 'graphql';

export const genreType = new GraphQLEnumType({
  name: 'GenreType',
  values: {
    FICTION: { value: 1, description: 'Fiction' },
    NONFICTION: { value: 2, description: 'Non-Fiction' },
    REFERENCE: { value: 3, description: 'Reference' },
    MAGAZINE: { value: 4, description: 'Magazine' },
  },
});