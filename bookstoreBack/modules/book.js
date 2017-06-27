var mongoose = require('mongoose');

//book Schema
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required:true
	},
	genre:{
		type: String,
		required:true
	},
	author:{
		type: String,
		required:true
	},
	discription:{
		type: String,
		required:true
	},
	imageUrl:{
		type: String,
		required:false
	},
	create_date:{
		type:Date,
		default : Date.now
	}
});
var Book = module.exports= mongoose.model('Book',bookSchema);

//Get Books
module.exports.getbooks=function(callback,limit){
	Book.find(callback).limit(limit);
};

//get book
module.exports.getbookById=function(id,callback){
	Book.findById(id,callback);
}
//Add book
module.exports.addBook=function(book,callback){
	Book.create(book,callback);
}

//update book
module.exports.updateBook=function(id,book,options,callback){
	var query= {_id:id};
	var update={
		title:book.title,
		genre:book.genre,
		author:book.author,
		discription:book.discription,
		imageUrl:book.imageUrl
	}
	Book.findOneAndUpdate(query,update,options,callback);
}

//remove book
module.exports.removeBook=function(id,callback){
	var query= {_id:id};	
	Book.remove(query,callback);
}