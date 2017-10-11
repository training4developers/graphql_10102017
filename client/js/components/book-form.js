import * as React from 'react';
import * as PropTypes from 'prop-types';

export class BookForm extends React.Component {

  static fragments = {
    genres: `fragment BookFormGenres on Query {
      genres: __type(name: "GenreType") {
        options: enumValues {
          value: name
          label: description
        }
      }
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
      [ e.target.name ]: (e.target.type === 'number' || e.target.getAttribute('data-type') === 'number')
        ? Number(e.target.value) : e.target.value
    });
  }

  onClick = () => {
    console.log(this.state);
    
    this.props.onSaveBook(this.state);
    
    this.setState({
      title: '',
      genre: '',
      pageCount: 0,
      price: 0,
      authorId: 0,
    });
  }

  static propTypes = {
    onSaveBook: PropTypes.func,
    genres: PropTypes.array,
    authors: PropTypes.array,
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
          <option value="">Select One...</option>
          {this.props.genres.map(genre => <option key={genre.value} value={genre.value}>{genre.label}</option>)}
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
          <option value="">Select One...</option>
          {this.props.authors.map(author => <option key={author.id} value={author.id}>{author.lastName}, {author.firstName}</option>)}
        </select>
      </div>
      <button type="button" onClick={this.onClick}>Add Book</button>
    </form>;

  }
  
  
}