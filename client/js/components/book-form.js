import * as React from 'react';

// Exercise

// 1. Convert the List(String) type of genres to an enum

// 2. Construct an introspection query to get the list of enum values from the GraphQL server

// 3. Use the enum values to populate the drop down box on the form

// query {
//   __schema {
//     types {
//       name
//     }
//   }
//   __type(name: "MessageLevelType") {
//     name
//     enumValues {
//       name
//       description
//       deprecationReason
//     }
//   }
// }

export class BookForm extends React.Component {

  static fragments = {
    genres: `fragment BookFormGenres on Query {
      genres
    }`,
    authors: `fragment BookFormAuthors on Query {
      authors {
        id
        firstName
        lastName
      }
    }`
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      genre: '',
      pageCount: 0,
      price: 0,
      authorId: 0,
    };
  }

  onChange = e => {
    this.setState({
      [ e.target.name ]: (e.target.type === 'number' || e.target['data-type'] === 'number')
        ? Number(e.target.value) : e.target.value
    });
  }

  onClick = () => {
    console.log(this.state);
  }

  render() {

    return <form>
      <div>
        <label htmlFor="title-input">Title:</label>
        <input type="text" id="title-input" name="title" value={this.state.title} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="genre-select">Genre:</label>
        <select id="genre-select" name="genre" value={this.state.genre} onChange={this.onChange}>
          {this.props.genres.map(genre => <option value={genre}>{genre}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="page-count-input">Page Count:</label>
        <input type="number" id="page-count-input" name="pageCount" value={this.state.pageCount} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price" value={this.state.price} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="author-select">Author:</label>
        <select id="author-select" name="authorId" value={this.state.authorId} onChange={this.onChange} data-type="number">
          {this.props.authors.map(author => <option value={author.id}>{author.lastName}, {author.firstName}</option>)}
        </select>
      </div>
      <button type="button" onClick={this.onClick}>Add Book</button>
    </form>;

  }
  
  
}