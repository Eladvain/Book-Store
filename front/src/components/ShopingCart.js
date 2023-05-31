import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import BookItem from './BookItem';

const ShopingCart = () => {

  const location = useLocation();
  const {shoppingBooks, addToShopping} = location.state ?? {};

  useEffect(()=>{
    console.log("here in use effect of shopping cart comp");
    if(shoppingBooks.length > 0)
    console.log("shopping cart component = "+JSON.stringify(shoppingBooks));
  },[])
  

  // const [shoppingCartBooks, setShoppingCartBooks] = useState([]);

  // useEffect(() => {
  //   async function printBooksOfShoppingCart(){
  //     setShoppingCart(cart=>[book, ...cart])
  //   }
  //   printBooksOfShoppingCart(shoppingCartBooks);
  // },[]);


  return (
    <div>
      <h1>Shopping Cart</h1>
      {/* {console.log("here in before if")} */}
      {shoppingBooks.length > 0 ?
            shoppingBooks.map((book, key)=>{
              return <BookItem bookItem = {book} addToShoppingCart = {addToShopping} isShoppingCart = {"true"} />
            })
          :""}
    </div>
  )
}

export default ShopingCart
