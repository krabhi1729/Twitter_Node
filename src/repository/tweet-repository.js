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
      const tweet = await Tweet.findById(id).populate({path:'comments'});
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
}

module.exports = TweetRepository;
