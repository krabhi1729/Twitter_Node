const express = require("express");
const connect = require("./src/config/database");
const app = express();


const TweetRepository = require("./src/repository/tweet-repository");
const Comment=require('./src/models/comments')
app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("MongoDb Connected");
  // const tweet = await Tweet.create({
  //   content: "First tweet",

  // });
  // const tweets=await Tweet.find({userEmail:'a@b.com'});
  /**way to query database like filter tweets based on particular emailId */
  // const tweets=await Tweet.findById('657b24555533617c58f5517a')
  // tweets.userEmail='b@c.yahhoo'
  // tweets.save();
  // console.log(tweets);
  /**Updating tweets */
  const tweetRepo = new TweetRepository();
  // const tweet=await tweetRepo.get('657b580634382cace017f45f')
    const tweet=await tweetRepo.getWithComments('657b580634382cace017f45f');
    /**earlier const tweet=await tweetRepo.get('657b580634382cace017f45f') by using this we are nor getting comments content we ate getting only
     * ObjectId
     */
  // const tweet=await tweetRepo.update('657b24555533617c58f5517a',{content:'latest tweet'})
  // const tweet = await tweetRepo.create({ content:'tweet with a comment schema'});
  // const comment=await Comment.create({content:'new comment added'})
  // console.log(tweet);
  // tweet.comments.push(comment);
  // await tweet.save();
  console.log(tweet);
});
