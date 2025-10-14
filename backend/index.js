import express from "express";
import { PORT, mongoDBURL } from  "./config.js"
import mongoose from 'mongoose'
import { Book } from "./models/bookModel.js";

const app = express()

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack Tutorial')
}); // used for getting routes

// Route for saving a new book
app.post('/books', async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
        ) {
            return response.status(400).send({
                message: 'Send all required fields: title, author publishYear',
            })
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,A
        }

        const Book = await Book.create(newBook)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.mesage })
    }
})

mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port : ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })