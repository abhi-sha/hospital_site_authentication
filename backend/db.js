const mongoose = require('mongoose');


const mongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://20103087:foodsite@cluster0.zy8mlpp.mongodb.net/foosite?retryWrites=true&w=majority');
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data=await fetched_data.find({}).toArray() 
    console.log();
  } catch (error) {
    console.log('err: ', error);
    process.exit();
  }
};



module.exports=mongoDB;

