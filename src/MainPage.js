import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book'
import PropTypes from 'prop-types'

class MainPage extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
	  onUpdateShelf: PropTypes.func.isRequired
  }

  render() {
		console.log(this.props.books)
		const { books, onUpdateShelf } = this.props
		const shelves = ['currentlyReading', 'wantToRead', 'read']
		const shelfNames = ['Currently Reading', 'Want to Read', 'Read']
		return (
      		<div className="list-books">
      			<div className="list-books-title">
        			<h1>MyReads</h1>
       	 		</div>
            return (
      			<div className="list-books-content">
        			<div>
			          {shelves.map((shelf, index) => {
            			return(
              				<div key={shelves[index]}className="bookshelf">
                				<h2 className="bookshelf-title">{shelfNames[index]}</h2>
                				<div className="bookshelf-books">
                  					<ol className="books-grid">
                    					{books.filter((book) => (
	                                      book.shelf === shelf))
	                                     .map((book) => (
	                      					<li key={book.id}>
						                        <Book
						                          onUpdateShelf={onUpdateShelf}
						                          book={book} />
	                      					</li>
                    					))}
                  					</ol>
                				</div>
              				</div>
            				)
          			  })}
        			</div>
      			</div>
      			)
            </div>  
    	)
  	}
}

export default MainPage