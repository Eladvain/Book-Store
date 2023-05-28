import React from 'react'
import bookItem from '../CSS/bookItem.css'

const BookItem = ({bookItem}) => {
  // console.log("in bookItem")
  return (
    <div className='book-div'>
      <h1 className='nameBook'>{bookItem.name}</h1>
      <img className='imgBook' src = {bookItem.image} alt="" />
    </div>
  )
}

export default BookItem
