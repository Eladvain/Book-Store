const router = require('express').Router();
const StatusCodes = require('http-status-codes').StatusCodes;
const package = require('pkg.json');
const fs = require('fs');
const utills = require('../../utills');


const set_content_type = function (req, res, next) 
{
	res.setHeader("Content-Type", "application/json; charset=utf-8");
	next()
}



 async function list_all_authors( req, res) 
 {
	const authors = await utills.read_from_file(utills.constants_dict.authors_file_name);
  res.send({authors_list:authors,
    msg:"All books returned"});	
}



router.get('/authors',  (req, res) => { list_all_authors(req, res) });

router.use( set_content_type );
module.exports = router;