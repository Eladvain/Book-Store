import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

const ShopingCart = () => {

  const location = useLocation();
  const {shoppingBooks, setShoppingBooksCart} = location.state ?? {};

  console.log("shopping cart component = "+JSON.stringify(shoppingBooks));

  // const [shoppingCartBooks, setShoppingCartBooks] = useState([]);

  // useEffect(() => {
  //   async function printBooksOfShoppingCart(){
  //     setShoppingCart(cart=>[book, ...cart])
  //   }
  //   printBooksOfShoppingCart(shoppingCartBooks);
  // },[]);


  return (
    <div>
      <h1>hellooo</h1>
      {/* {shoppingCartBooks.length > 0 ?
            shoppingCartBooks.map((book)=>{
              return <h1>shalom</h1>
            })
          :""} */}
    </div>
  )
}

export default ShopingCart
