import React, { Component } from 'react';
import Axios from 'axios';
import BookList from '../components/BookList/BookList';

class BooksPage extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await Axios.get('http://localhost:4040/books');
    console.log(response);

    this.setState({ books: response.data });
  }

  render() {
    return (
      <>
        <h1>Страница книг</h1>
        <BookList books={this.state.books} />

      
      </>
    );
  }
}

export default BooksPage;
