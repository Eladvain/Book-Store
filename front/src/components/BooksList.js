import React from 'react'
import BookItem from './BookItem'

const BooksList = ({booksList}) => {
  // console.log("books = "+booksList);
  
//   const listOfBooks = ()=>{

//     if(booksList.length === 0) return <div>Loading...</div>
//       console.log("in else00")
//       booksList.map(book =>{
//         return (
//           <div>
//           <h1>Hellooo</h1>
//           </div>
//         )
//       } 
//       )
// }
  

  return (
    <div className='booksBox'>
       {/* <h1>Hellooo</h1> */}
      {/* {booksList.map(book=>(
        <BookItem/>
      ))} */}
      {console.log("typeof = "+ typeof booksList)}
      {console.log("books in BooksList = "+booksList)}
      {booksList ? 
      booksList.map((book)=> {
        console.log("inside map func");
        console.log("bookInMap = "+JSON.stringify(book));
        return <BookItem bookItem = {book}/>
          
    }): ""}
      
     
  
      {/* {listOfBooks} */}
    </div>
  )
}

export default BooksList
