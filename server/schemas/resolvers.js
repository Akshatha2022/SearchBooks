const { Booksearch} = require('../models');

const resolvers = {
  Query: {
    Booksearch: async () => {
      return Booksearch.find({});
    },
    booksearch: async (parent, args) => {
      return await Booksearch.findOne({_id: args._id});
    }
  },
  Mutation: {
    createBooksearch: async (parent, args) => {
      const booksearch = await Booksearch.create({
        title: args.title,
        time: args.time,
        search: args.search
      });
      return booksearch;
    },
    updateBooksearch: async (parent, {_id, title, time, search}) => {
      const booksearch = await Booksearch.findOneAndUpdate(
        { _id: _id },
        {$set:{title, time, search}},
        {new: true}
      );
      return booksearch;
    },
    deleteBooksearch: async (parent, args) => {
      const booksearch = await Booksearch.findOneAndDelete({_id: args._id});
      return booksearch;
    }
  },
};

module.exports = resolvers;