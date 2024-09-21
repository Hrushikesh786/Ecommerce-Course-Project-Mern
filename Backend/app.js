import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();

dotenv.config();
//env
const port = process.env.PORT || 5001;
const URI = process.env.MongoDBURI;

//Connection to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    console.log("mongodb connected");
    
} catch (error) {
    console.log("Error",error);
    
}

// app.get("/", (req, res) => {
//   res.send("hello backend");
// });
app.listen(port, () => {
  console.log(`port running on ${port}`);
});
