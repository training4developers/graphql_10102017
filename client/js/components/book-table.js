import * as React from 'react';

export class BookTable extends React.Component {

  static fragments = {
    books: `
      fragment BookTableBooks on Query {
        books {
          id
          title
          pages: pageCount
          genre
          author {
            firstName
            lastName
          }
        }
      }
    `,
    genres: `
      fragment BookTableGenres on Query {
        genres: __type(name: "GenreType") {
          options: enumValues {
            value: name
            label: description
          }
        }
      }
    `
  };
  
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
          <td>{this.props.genres.find(g => g.value === book.genre).label}</td>
          <td>{book.author.firstName} {book.author.lastName}</td>
        </tr>)}
      </tbody>
    </table>;
  }

}