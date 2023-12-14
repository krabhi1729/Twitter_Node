const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    /*Schema is like class i.e blueprint and Model is like object that will connect
to database and fetch data.*/
    content: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
    },
    //   comments: [
    //     {
    //       content: {
    //         type: String,
    //         required: true
    //       }
    //     }
    //   ]
    // },
    comments: [
      {
        
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment',
      
      }
    ]
  },
  { timestamps: true }
);
/*timestamps:true will create createdAt and updatedAt attribute automatically */
const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
