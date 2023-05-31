import React from 'react'
import BookItem from './BookItem'
import booksList from '../CSS/booksList.css'

const BooksList = ({booksList, shoppingBooks, setShoppingCart, addToShopping}) => {
  
  return (
    <div className='booksBox'>
  
      {/* {console.log("typeof = "+ typeof booksList)}
      {console.log("books in BooksList = "+booksList)} */}
      {booksList ? 
      booksList.map((book)=> {
        // console.log("inside map func");
        // console.log("bookInMap = "+JSON.stringify(book));
        return <BookItem 
                bookItem = {book} 
                addToShoppingCart = {addToShopping} 
                isShoppingCart = {"false"} />
          
    }): ""}
      
     
  
      {/* {listOfBooks} */}
    </div>
  )
}

export default BooksList
