// likes (integer, minimum default is 0)
// coverImage (string, required and it can be 1 only)
// content ( string, required)
// timestamps (string, required)

const mongoose= require("mongoose")

const bookSchema= new mongoose.Schema({
    likes:{type: String, default:0},
    coverImage:{type: String, required:true, unique:true},
    content:{type:String, required:true}
}, {
    versionKey: false,
    timestamps:true
})


module.exports = mongoose.model("book", bookSchema)