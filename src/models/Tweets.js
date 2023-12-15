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
  /*timestamps:true will create createdAt and updatedAt attribute automatically */
);

tweetSchema.virtual('contentWithEmail').get(function process(){
  return `${this.content} \nCreated By: ${this.userEmail}`;
})
/**
In MongoDB, virtuals are additional fields that you can add to a document (or model) which are not persisted in the database. 
They are computed or derived properties, generated on-the-fly when queried,
 rather than being stored physically 
in the database.

Virtuals enable you to define properties on your documents that do not exist in the actual document
storage but can be accessed and used like any other property. These properties are created using a getter function which can perform calculations, 
combine fields, or manipulate existing data in your document.
Even the .id we use is not present in document but we are able to access it because there virtual by default defined in schema  */



tweetSchema.pre('save',function(next){
  console.log('Inside a hook');
  this.content=this.content+'...........';
  next();
})
/**
 * Mongoose allows you to define middleware functions that intercept and perform operations before or after certain events, mimicking pre and post hooks. 
 * These middleware functions are triggered before or after specific operations like save, update, or remove.
 * 
 * Practical Use Cases:
Data Validation: You can use pre-save hooks to validate data before saving it into the database. For instance, ensuring certain fields are present or meet specific criteria.

Timestamping: Automatically adding timestamps (like createdAt and updatedAt) before saving or updating a document.

Encryption: Hashing passwords or sensitive information before saving them in the database.

Dependency Handling: In scenarios where one document's update triggers updates in related documents.
 * 
In MongoDB, pre-save hooks handle operations before saving data, useful for actions like automatically creating a URL-friendly slug from a title in a blogging platform.
 Post-save hooks trigger actions after data is saved, like sending asynchronous email notifications to followers upon publishing an article, enabling tasks after the main 
 operation completes, such as email distribution or logging for analytics.
 */

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
