import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../CSS/searchBar.css'
import BooksList from './BooksList';

const SearchBar = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [shoppingCartBooks, setShoppingCartBooks] = useState([]);

  useEffect(()=>{
    console.log("shopping cart books = "+JSON.stringify(shoppingCartBooks));
  }, [shoppingCartBooks])

  useEffect(() => {
    async function printBooks(){
      let response;
    if(searchTerm === ""){
      // console.log("inside");
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
    console.log("books_list in useEffect = "+JSON.stringify(books_list));
    setBooks([...books_list]);
    // console.log("books = "+books)
    // await printBooksToConsole(books);
    }
    }
    printBooks();
  },[]);

  const handleChange = async (event)=> {
    setSearchTerm(event.target.value);
    let response;
    event.preventDefault();

    console.log("in handle change function")
    console.log("searchTerm = " + searchTerm);  
  
      const searchBooks = {
        "bookName" : `${event.target.value}`
    }
    console.log("searchValueObject = "+JSON.stringify(searchBooks));
    try {
        response = await fetch(`http://localhost:2718/book/search?name=${event.target.value}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    } catch (e) {
        console.log("the error is:", e)
    }
    console.log("heree");
    console.log("response = "+response);
    const books_res = await response.json();
    const books_list = books_res["books"];
    console.log("books_list in handle change = "+JSON.stringify(books_list));
    setBooks([...books_list]);

}

async function addBookToShoppingCart(book)
    {
      console.log("book in shopping cart = "+JSON.stringify(book));
      console.log("in addBook function")
      setShoppingCartBooks([book,...shoppingCartBooks])
      console.log("in favourite book = "+JSON.stringify(shoppingCartBooks));
  
    }
    

  

  return (
    <div className='searchBar'>
      <input className='searchInput'
        type = "text"
        placeholder='Search Book...'
        value = {searchTerm}
        onChange={handleChange}
      />
      <Link to="/shoppingCart" state={{shoppingBooks : shoppingCartBooks}}>Shopping Cart</Link>
      <BooksList booksList = {books} addToShopping = {addBookToShoppingCart}/>
    </div>
  )
  }
  
export default SearchBar
