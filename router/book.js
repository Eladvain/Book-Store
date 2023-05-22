const router = require('express').Router();
const StatusCodes = require('http-status-codes').StatusCodes;
const package = require('pkg.json');
const fs = require('fs');
const utills = require('../utills');


const set_content_type = function (req, res, next) 
{
	res.setHeader("Content-Type", "application/json; charset=utf-8");
	next()
}



 async function list_all_books( req, res) 
 {
	const books = await utills.read_from_file(utills.constants_dict.books_file_name);
  res.send({books_list:books,
    msg:"All books returned"});	
}



router.get('/books',  (req, res) => { list_all_books(req, res) });

router.use( set_content_type );
module.exports = router;