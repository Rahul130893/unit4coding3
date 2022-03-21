const express =require("express")

const User= require("../models/book.models")

const router= express.Router()

router.post("", async (req, res)=>{
    try {
        const book= await Book.create(req.body)
        return res.status(200).send({book})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports= router