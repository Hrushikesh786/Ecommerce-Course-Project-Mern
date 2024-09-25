import Book from "../model/book.model.js";


//export for use in another api links
export const getBook= async(req,res) =>{
    try {
        const book =await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error is:",error);
        res.status(500).json({error});
    }
}