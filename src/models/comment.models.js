
const mongoose= require("mongoose")

const commentSchema= new mongoose.Schema({
   
    body:{type:String, required:true},
    userId:{type: mongoose.Schema.Types.ObjectId}
}, {
    versionKey: false,
    timestamps:true
})


module.exports = mongoose.model("comment", commentSchema)