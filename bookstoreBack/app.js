var express =require('express');
var app= express();
var bodyParser= require('body-parser');
var mongoose= require('mongoose');
app.use(express.static(__dirname+'/test' ));
app.use(bodyParser.json());
Genre=require('./modules/genre');
Book=require('./modules/book');

//connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection ;
app.get('/', function(req, res){
	res.send('please use /api/books or /api/genres');
});
app.get('/api/genres',function(req,res){
   Genre.getGenres(function(err,genres){
  if(err){
  	throw err;
  }
  res.json(genres);

   });
});

app.post('/api/genres',function(req,res){
	var genre=req.body;
   Genre.addGenre(genre,function(err,genre){
  if(err){
  	throw err;
  }
  res.json(genre);

   });
});

app.put('/api/genres/:_id',function(req,res){
	var id=req.params._id;
	var genre=req.body;
   Genre.updateGenre(id,genre,{},function(err,genre){
  if(err){
  	throw err;
  }
  res.json(genre);

   });
});

app.delete('/api/genres/:_id',function(req,res){
	var id=req.params._id;
   Genre.removeGenre(id,function(err,genre){
  if(err){
  	throw err;
  }
  res.json(genre);

   });
});



app.get('/api/books',function(req,res){
   Book.getbooks(function(err,books){
  if(err){
  	throw err;
  }
  res.json(books);
   });
});

app.post('/api/books',function(req,res){
	var book=req.body;
   Book.addBook(book,function(err,book){
  if(err){
  	throw err;
  }
  res.json(book);

   });
});
app.get('/api/books/:_id',function(req,res){
   Book.getbookById(req.params._id,function(err,book){
  if(err){
  	throw err;
  }
  res.json(book);
   });
});

app.put('/api/books/:_id',function(req,res){
	var id=req.params._id;
	var book=req.body;
   Book.updateBook(id,book,{},function(err,book){
  if(err){
  	throw err;
  }
  res.json(book);

   });
});

app.delete('/api/books/:_id',function(req,res){
	var id=req.params._id;
   Book.removeBook(id,function(err,book){
  if(err){
  	throw err;
  }
  res.json(book);

   });
});

// process.on('uncaughtException', (code) => {
//   setTimeout(() => {
//     console.log('This will not run');
//   }, 0);  
// });
// process.on('SIGTERM', (code) => {
// 	console.log('This not running');
// });
app.listen(3001);
console.log('Running on  port 3001..');

