const typeDefinations = `
	type Query{
		allBlogs : [Blog]
		Blogs(title: String, author: String, genre : String, rating: Int, status: String) : [Blog]
		Author(name : String age : Int city : String email: String status: String) : [Author]
		getLogin(email: String, password: String) :  Author

	}
	type Mutation {
		addBlog(
			title :String	
			author :String
			mainImg :String
			genre : String
			comment : [String]
			rating	: Int
			info : String
			status: String
			authorId : Int
		) : Blog

		addComment(title : String!, comment: String!) : Blog

		addAuthor(
			name : String
			age : Int
			city : String
			email : String
			status : String
			password: String
			) : Author

		updateAuthor(name : String
					age : Int
					city : String
					email : String
					status : String
					password: String) : Author
	}

	type Author {
		name : String
		age : Int
		city : String
		email : String
		status : String
		password: String
		blog : [Blog]
		authorId: Int
	}
	
	type Blog{
		id : String!
		title :String
		description :String
		author : String
		mainImg :String
		genre : String
		comment : [String]
		rating	: Int
		info : String
		otherImg : [String]
		status : String
		authorId : Int
	}

	schema {
		query : Query
		mutation : Mutation
	}
	`;

	export default [typeDefinations];


