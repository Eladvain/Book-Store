import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import bookItemStyle from '../CSS/bookItem.css'

const BookItem = ({bookItem, shoppingBooksCart, setShoppingCartBooks}) => {
  // console.log("in bookItem")

  const name_of_author = {
    "1" : "William Shakespeare",
    "2" : "Agatha Christie", 
    "3" : "Barbara Cartland"
  }

  async function addBookToShoppingCart(book)
    {
      console.log("in addBook function")
      setShoppingCartBooks([book,...shoppingBooksCart])
    }
  

  return (
    <div className='book-div'>
      <Link to = "/author" state={{author : name_of_author[bookItem.author], id : bookItem.author}}>
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
        </Link>
        <Outlet />
        <button className='addButton' onClick={()=>addBookToShoppingCart(bookItem)}>Add To Cart</button>
      
    </div>
  )
}

export default BookItem
