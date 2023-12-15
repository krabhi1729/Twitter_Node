const Tweet = require("../models/Tweets");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async update(tweetId, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(tweetId, data,{new:true});
      /**findByIdAndUpdate update the document but return old one so we use {new:true} to sync up */
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async getWithComments(id){
    try {
      const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
      /**Mongoose queries return an instance of the Mongoose Document class. Documents are much heavier than vanilla JavaScript objects, because they have a lot of internal state for change tracking.
       *  Enabling the lean option tells Mongoose to skip instantiating a full Mongoose document and just give you the POJO. */
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async destroy(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset,limit){
      try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;
