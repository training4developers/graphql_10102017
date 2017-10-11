import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloWorld } from './components/hello-world';

// {"query":"query {\n\tbooks {\n    id\n    title\n  }\n}\n","variables":null}

const myFirstGraphQLQuery = {
  query: "query { books { id title } }",
  variables: null
};

fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(myFirstGraphQLQuery),
})
  .then(res => res.json())
  .then(results => console.log(results));

Instructions

Create a fetch request to download some car data from the graphql server and
display it in the console.

ReactDOM.render(<HelloWorld />, document.querySelector('main'));
