import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import BookItem from './BookItem';

const ShopingCart = () => {

  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }

  const location = useLocation();
  const {shoppingBooks} = location.state ?? {};

  const shoppingCartFromCookie = getCookie("shoppingcartbooks");
  console.log("fromCookie = "+shoppingCartFromCookie);

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
      {/* {document.cookie.length > 0 ?
            document.cookie.map((book, key)=>{
              return <BookItem bookItem = {book} addToShoppingCart = {addToShopping} isShoppingCart = {"true"} />
            })
          :""} */}
    </div>
  )
}

export default ShopingCart
