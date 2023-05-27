import React from 'react'
import BookItem from './BookItem'

const BooksList = ({booksList}) => {
  // console.log("books = "+booksList);
  
  const listOfBooks = ()=>{

    if(booksList.length === 0) return <div>Loading...</div>
    else{
      booksList.map(book =>(
        <BookItem bookItem = {book}/>
      
      ))
    
    }
    
  }
  

  return (
    <div className='booksBox'>
      {/* {booksList.map(book=>(
        <BookItem/>
      ))} */}
      {listOfBooks}
    </div>
  )
}

export default BooksList
