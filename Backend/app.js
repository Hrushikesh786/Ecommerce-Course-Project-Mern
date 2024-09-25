import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors"
const app = express();

dotenv.config();


app.use(cors())
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



// defining routes
app.use("/book",bookRoute)
app.listen(port, () => {
  console.log(`port running on ${port}`);
});
