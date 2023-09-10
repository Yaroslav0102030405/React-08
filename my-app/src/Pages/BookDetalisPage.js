import React, { Component } from 'react';
import Axios from 'axios';
import routes from '../routes';

class BookDetalisPage extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const response = await Axios.get(
      `http://localhost:4040/books/${bookId}?_expand=author`,
    );
    this.setState({ ...response.data });
  }

  handkeGoBack = () => {
    const { location, history } = this.props;

    history.push(location?.state?.from || routes.books )
  }

  render() {
    const { imgUrl, title, descr } = this.state;
    return (
      <>
        <h1>Страница одной книги {this.props.match.params.bookId}</h1>
        <button type="button" onClick={this.handkeGoBack}>
          Вернуться назад
        </button>
        <img src={imgUrl} alt="" />
        <h2>{title}</h2>
        <p>{descr}</p>
      </>
    );
  }
}

export default BookDetalisPage;
