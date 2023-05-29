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
    console.log("books_list in useEffect = "+JSON.stringify(books_list));
    setBooks([...books_list]);
    // console.log("books = "+books)
    await printBooksToConsole(books);
    }
    }
    printBooks();
  },[]);

  async function printBooksToConsole(booksList)
  {
    console.log("in printBooks function")
    if(booksList.length > 0)
    {
      await booksList.array.forEach((book) => {
        console.log("in foreach of printBooks func")
        console.log("book - "+JSON.stringify(book));  
      });
    }
      
  }

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

    // const status = response.status;
    // console.log("parsed_response status------------", status);

    // if (status !== 200) {
    //     const parsed_response = await response.json();
    //     console.log("error");
    //     this.setState({
    //         has_error: true,
    //         message_error: parsed_response.msg
    //     });
    // }else
    // {
    //     console.log("move to login page");
    //     window.location.href = '/login.html' 
    // }
}
    
    

  

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
  }
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


export default SearchBar
