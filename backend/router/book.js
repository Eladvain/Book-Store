const router = require('express').Router();
const StatusCodes = require('http-status-codes').StatusCodes;
const package = require('pkg.json');
const fs = require('fs');
const utills = require('../../utills');
const url = require('url');


const set_content_type = function (req, res, next) 
{
	res.setHeader("Content-Type", "application/json; charset=utf-8");
	next()
}



 async function list_all_books( req, res) 
 {
	const books = await utills.read_from_file(utills.constants_dict.books_file_name);
	// console.log("here");
  res.send({books_list:books,
    msg:"All books returned"});	
}

async function list_all_books_by_author_id(req, res)
{
	console.log("in list_all_books_by_author_id")
	const books = await utills.read_from_file(utills.constants_dict.books_file_name);
	const id = parseInt(req.params.id);
	if ( id <= 0)
	{
		res.status( StatusCodes.BAD_REQUEST );
		res.send({msg:"Bad id given"}).status(StatusCodes.BAD_REQUEST)
		return;
	}
	const books_by_author_id = books.filter(book => book.author === id );
	
	res.send({books:books_by_author_id,
	          msg:"returned books by author id"} );   
}

async function list_all_books_by_search_input(req, res)
{
	console.log("in list_all_books_by_search_input")
	const queryString = req.query;
	console.log("query = "+JSON.stringify(queryString))
	// const urlParams = new URLSearchParams(queryString);
	const searchValue = queryString.name;
	console.log("bookName = "+searchValue );
	const books = await utills.read_from_file(utills.constants_dict.books_file_name);
	const books_by_input = books.filter(book => book.name.includes(searchValue) );
	console.log("books after filter by search = "+JSON.stringify(books_by_input))
	res.send({books:books_by_input,
		msg:"returned books by input search"} );   
}

async function create_new_book(req, res)
{
	
}



router.get('/books',  (req, res) => { list_all_books(req, res) });
router.get('/books/(:id)',  (req, res) => { list_all_books_by_author_id(req, res) });
router.post('/newBook',  (req, res) => { create_new_book(req, res) });
router.get('/search',  (req, res) => { list_all_books_by_search_input(req, res) });


router.use( set_content_type );
module.exports = router;