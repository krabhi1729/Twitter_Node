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



const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
