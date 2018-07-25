import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import Book from './Book'

class BooksApp extends React.Component {
  state = {
  	books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }	

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState((state) => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">

      	<Route exact path="/" render={() => (
      		<MainPage
	      		books={this.state.books}
	      		onUpdateShelf={this.updateShelf}
      	/>
      	)} />

      	<Route path="/search" render={() => (
	      	<SearchPage
	      		onUpdateShelf={this.updateShelf}
	      		books={this.state.books}
	      	/>
      	)} />

      </div>
    )
  }
}

export default BooksApp
