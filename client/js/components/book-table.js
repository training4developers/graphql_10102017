import * as React from 'react';

export class BookTable extends React.Component {

  static fragment = `
    fragment BookTable on BookType {
      id
      title
      pages: pageCount
      genre
      author {
        firstName
        lastName
      }
    }
  `;
  
  render() {

    return <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Pages</th>
          <th>Genre</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {this.props.books.map(book => <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.pages}</td>
          <td>{book.genre}</td>
          <td>{book.author.firstName} {book.author.lastName}</td>
        </tr>)}
      </tbody>
    </table>;
  }

}