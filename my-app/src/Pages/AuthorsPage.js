import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';
// import AuthorBooks from '../components/AuthorBooks';
import BookList from '../components/BookList/BookList';

class AuthorsPage extends Component {
  state = {
    authors: [],
  };

  async componentDidMount() {
    const response = await Axios.get('http://localhost:4040/authors?_embed=books');
    console.log(response.data);

    this.setState({ authors: response.data });
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <h1>Страница авторов</h1>

        <ul>
          {this.state.authors.map(({ id, name })=> (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>

        <Route
          path={`${match.path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);
            const author = this.state.authors.find(({ id }) => id === bookId);

            return author && <BookList {...props} books={author.books} />;
          }}
        />
      </>
    );
  }
}

export default AuthorsPage;
