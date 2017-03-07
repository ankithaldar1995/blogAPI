import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';
import Mongoose from 'mongoose';


// const mongo = Mongoose.connect('mongodb://localhost/blogWebsite');
const mongo = Mongoose.connect('mongodb://abc:123@dbh36.mlab.com:27367/blog');
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongo);

mongo.Promise = global.Promise;

var ObjectId = Mongoose.Schema.Types.ObjectId;

const BlogSchema = new Mongoose.Schema({
	//id: {type: Number, index: { unique: true }},
	title : {type: String, index: { unique: true }},
	author:  String,
	authorObjectId : {type : Mongoose.Schema.Types.ObjectId, ref : 'author'},
	authorId : Number,
	mainImg :String,
	info : String,
	rating	: Number,
	genre : String,
	comment : [String],
	status: String,
	
});

BlogSchema.plugin(autoIncrement.plugin, { model: 'blog', field: 'blogId' });

 const AuthorSchema = new Mongoose.Schema({
 		//id: {type: Number, index: { unique: true }},
 		name : String,
 		age : Number,
 		email : {type: String, index: { unique: true }},
 		city : String,
 		status: String,
 		password : String,
 		status: String
 	});

AuthorSchema.plugin(autoIncrement.plugin, { model: 'author', field: 'authorId' });

const CounterSchema = new Mongoose.Schema({
	authorCounter : Number,
	blogCounter : Number,
});

AuthorSchema.methods.findAllAuthors = function(cb){
	return Author.find({type: AuthorSchema}, cb);
}




const Blog  = Mongoose.model('blog', BlogSchema);
const Author = Mongoose.model('author', AuthorSchema);
const Counter = Mongoose.model('counter', CounterSchema)

var authorTest = new Author({
	name : "Ankit",
	age : 20, 
	city : "Ggn",
	//blog : [a]

});

var a = new Blog({
	title : "3 Blog",
	mainImg : "main Image",
	description: "This is the first blog of the page",
	info : "This is info of the blog post",
	genre : "Mtal",
	comment : ["Wow","just awesome"],
	rating : 4,
	//author : authorTest,
});

var authorId;

/*
a.save(function(err, authorData){
	var data = {author : authorData};
	authorTest.blog.push(data);
	authorTest.save();
});

*/

var getBlogByAuthorName = function(name){
	console.log(Blog.find(author : name));
}




export {Blog, Author};