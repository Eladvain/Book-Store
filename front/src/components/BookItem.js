import React from 'react'
import bookItem from '../CSS/bookItem.css'

const BookItem = ({bookItem}) => {
  // console.log("in bookItem")

  const name_of_author = {
    "1" : "William Shakespeare",
    "2" : "Agatha Christie", 
    "3" : "Barbara Cartland"
  }

  return (
    <div className='book-div'>
      <div className="nameOfBook">
        <h1 className='nameBook'>{bookItem.name}</h1>
      </div>
      {/* <div className='authorName'> */}
        <label className='name-label1'>
          author: 
        </label>
        <label className='name-label2'> {name_of_author[bookItem.author]}</label>
        
      {/* </div> */}
      <img className='imgBook' src = {bookItem.image} alt="" />
      <label className='price-label1'>
          price: 
        </label>
        <label className='price-label2'> {bookItem.price}</label>
    </div>
  )
}

export default BookItem
