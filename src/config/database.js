const mongoose=require('mongoose');
const connect=async()=>{
  await mongoose.connect('mongodb://localhost/twitter_Dev');
/**In mongodb we have collections in place of tables and documents in place of columns just analogy */
}
module.exports=connect;