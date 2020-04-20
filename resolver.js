import { Author } from './connectors';
import { Post } from './connectors';


const resolvers = {

  Query: {
    author(_, args) {
      return Author.findAll({ where: args });
    },
    posts(_, args) {
      return Post.findAll({ where: args });
    }
  },

  Mutation: {

    createAuthor(_, args) {
      console.log(args)
      return Author.create(args, {
        include: [{
          model: Post,
        }]
      });
    },

    updateAuthor(_, args) {

      var updateProfile = { title: "name here" };
      console.log(args.authorId)
      var filter = {
        where: {
          authorId: args.authorId
        },
        include: [
          { model: Post }
        ]
      };
      Author.findOne(filter).then(function (product) {
        Author.update(args, { where: { authorId: args.authorId } }).then(function (result) {
          product.posts[0].updateAttributes(args.posts[0]).then(function (result) {
            //return result;
          })
        });
      })
      return "updated";
    },

  },


  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
  },
};

export default resolvers;