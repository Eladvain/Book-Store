import { useLocation } from "react-router-dom";
import BookItem from "./BookItem";
import BooksList from "./BooksList";

import React, { useEffect, useState } from 'react'

const Author = () => {

  const location = useLocation();
  const {author, id} = location.state;

  const [booksOfAuthor, setBooksOfAuthor] = useState([]);

  useEffect(() => {
    async function printBooksOfSpecAuthor(){
      let response;
      // console.log("inside");
      try {
        console.log("id = " + id)
        response = await fetch(`http://localhost:2718/book/books/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                credentials: 'include',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        console.log('error = ' + error);
    }
    const books_res = await response.json();
    const books_list = books_res["books"];
    console.log("books_list in useEffect in Author Page = "+JSON.stringify(books_list));
    setBooksOfAuthor([...books_list]);
    // console.log("books = "+books)
    // await printBooksToConsole(books);
    }
    printBooksOfSpecAuthor();
  },[]);


  return (
    <div className="author-page">
      <h1 className="authorName">{author}</h1>
      <div className="booksBox">
      {booksOfAuthor ? 
      booksOfAuthor.map((book)=> {
        console.log("inside map func in author page");
        console.log("bookInMapInAuthorPage = "+JSON.stringify(book));
        return <BookItem bookItem = {book}/>
          
    }): ""}
      </div>
    </div>
  )
}

export default Author


