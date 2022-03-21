const express= require("express")

const connect= require("./config/db.js")

const app=express()

app.use(express.json())

const userController= require("./controller/user.controller")
const bookController= require("./controller/book.controller")
const publicationController= require("./controller/publication.controller")
const commentController= require("./controller/comment.controller")





app.use("/user", userController)
app.use("/book", bookController)
app.use("/publication", publicationController)
app.use("/comment", commentController)


app.listen(5000, async()=>{
    try {
        await connect()
        console.log("listening at 5000")
    } catch (error) {
        console.log(error)
    }
})