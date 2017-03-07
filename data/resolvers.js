import {Blog, Author } from './connectors';

const resolvers = {
	Mutation : {
		addBlog(_, args){
			console.log(args);
			var a = new Blog(args);
			return a.save();
		},
		addComment(_,args){
			console.log(args);
			return Blog.findOne({'title' : args.title}).then((x)=>{
				x.comment.push(args.comment);
				return x.save().then((y)=>{
					return y;
				})
				
			});
		},
		addAuthor(_, args){
			console.log(args);
			var a = new Author(args);
			return a.save();
		},
		updateAuthor(_, args){
			var query = { email: args.email };
			console.log(query);
			Author.findOne(query, function (err, doc){
			  doc.name = args.name;
			  doc.city = args.city;
			  doc.age = args.age;
			  doc.password = args.password;
			  doc.status = args.status;
			  doc.save();
			});
		}
	},
	Query: {
		allBlogs(_, args){
			return Blog.find({});
		},
		Blogs(_, args){
			console.log(args);
			return Blog.find(args);
		},
		Author(_, args){
			return Author.find(args);
		},
		getLogin(_, args){
			return Author.findOne(args);
		}

	},
	Author : {
		blog(author){
			var query = Author.find(author);
			query.exec(function(err, Author){
				return Blog.find(author : Author);
			})
		}	

	},
	Blog :  {
	
	},
};

export default resolvers;