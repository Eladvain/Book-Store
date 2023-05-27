import React,{useState, useEffect} from 'react'
import '../CSS/searchBar.css'
import BooksList from './BooksList';

const SearchBar = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function printBooks(){
      let response;
    if(searchTerm === ""){
      console.log("inside");
      try {
        response = await fetch("http://localhost:2718/book/books", {
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
    const books_list = books_res["books_list"];
    console.log("books_list = "+JSON.stringify(books_list));
    setBooks(books_list);
    // console.log("books = "+books)
    printBooksToConsole(books);
    }
    }
    printBooks();
  },[,searchTerm]);

  function printBooksToConsole(booksList)
  {
    booksList.map(book=>{
      console.log("book - "+JSON.stringify(book));
    })
  }

  const handleChange = (event)=> setSearchTerm(event.target.value);

  return (
    <div className='searchBar'>
      <input className='searchInput'
        type = "text"
        placeholder='Search Book...'
        value = {searchTerm}
        onChange={handleChange}
      />
      <BooksList booksList = {books}/>
    </div>
  )

  // const onSubmit = async (searchTerm)=>{
  //   let response;
  //   if(searchTerm === ""){
  //     try {
  //       response = await fetch('/book/books', {
  //           method: 'GET',
  //           headers: {
  //               'Content-Type': 'application/json',
  //               credentials: 'include'
  //           }
  //       });
  //   } catch (error) {
  //       console.log('error = ' + error);
  //   }
  //   }
  // } 
}

export default SearchBar
