import { GraphQLInputObjectType, GraphQLInt, GraphQLFloat, GraphQLString } from 'graphql';

import { genreType } from './genre-type';

const fields = () => ({
  title: { type: GraphQLString },
  genre: { type: genreType },
  pageCount: { type: GraphQLInt },
  price: { type: GraphQLFloat },
  authorId: { type: GraphQLInt },
});

export const insertBookInputType = new GraphQLInputObjectType({
  name: 'InsertBookInputType',
  description: 'Input type for inserting new books',
  fields,
});

export const replaceBookInputType = new GraphQLInputObjectType({
  name: 'ReplaceBookInputType',
  description: 'Input type for replacing existing books',
  fields: () => ({ id: { type: GraphQLInt }, ...fields() }),
  // fields: () => Object.assign(fields(), { id: { type: GraphQLInt }}),
});