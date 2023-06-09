const express = require("express");
const app = express()
const package = require('pkg.json');
const path = require('path');
const cors = require('cors');


const  port = 2718;

const bookRoute = require("./backend/router/book");
const authorRoute = require("./backend/router/author");
// const postRoute = require("./router/posts");
// const messageRoute = require("./router/messages")
// const adminRoute = require("./router/admin")
const utills = require("./utills");

const reExt = /\.([a-z]+)/i;


function content_type_from_extension( url)
{
	const m = url.match( reExt );
	if ( !m ) return 'application/json'
	const ext = m[1].toLowerCase();

	switch( ext )
	{
		case 'js': return 'text/javascript';
		case 'css': return 'text/css';
		case 'html': return 'text/html';
	}

	return 'text/plain'
}

// General app settings
const set_content_type = function (req, res, next) 
{
	const content_type = 
	(req.baseUrl == '/book' || req.baseUrl == '/author' ) ? 
	"application/json; charset=utf-8" : 
	content_type_from_extension( req.url)
	res.setHeader("Content-Type", content_type);
	next()
}


app.use(set_content_type);
app.use(express.json());  // to support JSON-encoded bodies
app.use(express.urlencoded( // to support URL-encoded bodies
{  
  extended: true
}));
app.use(cors());

 app.use("/book", bookRoute);
app.use("/author", authorRoute);
// app.use("/post", postRoute);
// app.use("/message", messageRoute.router);
// app.use("/admin", adminRoute);

app.use(express.static(path.join(__dirname, 'front'))); 

//for session cookie
app.use(function(req, res, next) {
	res.header('Content-Type', 'application/json;charset=UTF-8')
	res.header('Access-Control-Allow-Credentials', true)
	res.header(
	  'Access-Control-Allow-Headers',
	  'Origin, X-Requested-With, Content-Type, Accept'
	)
	next()
})
  

function landing_page(req, res) {
	res.redirect('/login.html');
}

app.get('/', (req, res) => { landing_page(req, res) })


let msg = `MTABOOK  listening at port ${port}`
 app.listen(port, () => 
 { 
   console.log( msg ) ;
   utills.initialize_max_ids_from_file();
 })


