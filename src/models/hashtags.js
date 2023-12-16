const mongoose=require('mongoose');

const hashtagSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  tewwts:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Tweet'
    }
  ]
})