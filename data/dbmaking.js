//NOT USED


import Mongoose from 'mongoose';
var faker = require('faker');


// const mongo = Mongoose.connect('mongodb://localhost/blogs');
const mongo = Mongoose.connect('mongodb://abc:123@dbh36.mlab.com:27367/blog')

const BlogSchema = mongoose.Schema({
	postId: Number,
	title: String,
	image : String,
	text : String,
	detail :String,
	author: String,
	rating: String,//enum the types
	views : Number,
});

mongo.Promise = global.Promise;

const Blog = Mongoose.model('blogs', BlogSchema);


var post = new BlogPost({
	title: "My first post", author: "Yash Kumar", 
	text: "We want to make documentation obsolete"
});

//save model to MongoDB
post.save(function (err) {
  if (err) {
		return err;
  }
  else {
  	console.log("Post saved");
  }
});