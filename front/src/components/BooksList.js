import React from 'react'
import BookItem from './BookItem'

const BooksList = ({booksList}) => {
  // console.log("books = "+booksList);
  
  const listOfBooks = ()=>{

    if(booksList.length === 0) return <div>Loading...</div>
      console.log("in else00")
      booksList.map(book =>{
        return (
          <div>
          <h1>Hellooo</h1>
          </div>
        )
      } 
      )
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
