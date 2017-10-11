import { GraphQLInterfaceType, GraphQLString } from 'graphql';

// {
//   people {
//     __typename
//     firstName
//     lastName
//   	... on AuthorType {
//       id
//     }
//   	... on StudentType {
//       id
//       grade
//     }
// 	}
// }

export const personInterfaceType = new GraphQLInterfaceType({
  name: 'PersonInterface',
  description: 'An interface for all people.',
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  }),
  resolveType: value => {
    if (value.grade) {
      return 'StudentType';
    } else {
      return 'AuthorType';
    }
  }
});