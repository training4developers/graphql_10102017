import { GraphQLUnionType } from 'graphql';

import { authorType } from './author-type';
import { studentType } from './student-type';

// {
//   people {
//     __typename
//   	... on AuthorType {
//       id
//       firstName
//       lastName
//     }
//   	... on StudentType {
//       id
//       firstName
//       lastName
//       grade
//     }
// 	}
// }

export const personType = new GraphQLUnionType({
  name: 'PersonType',
  types: [ authorType, studentType ],
  resolveType: value => {

    if (value.grade) {
      return studentType;
    } else {
      return authorType;
    }

  },
});