import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

const ShopingCart = () => {

  const location = useLocation();
  const {book} = location.state;

  const [shoppingCartBooks, setShoppingCartBooks] = useState([]);

  useEffect(() => {
    async function printBooksOfShoppingCart(){
      setShoppingCartBooks([book, ...shoppingCartBooks])
    }
    printBooksOfShoppingCart();
  },[]);


  return (
    <div>
      {shoppingCartBooks ?
            shoppingCartBooks.map((book)=>{
              return <h1>shalom</h1>
            })
          :""}
    </div>
  )
}

export default ShopingCart
