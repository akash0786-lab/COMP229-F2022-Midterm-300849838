// <!-- File: book.js Author: Manipal Singh Sidhu - Student Number: 300859319 WebApp Name: Midterm - Created on: October 27, 2021 -->

let mongoose = require('mongoose');

// Create a model class
let bookModel = mongoose.Schema(
    {
        Title: String,
        Description: String,
        Price: Number,
        Author: String,
        Genre: String
    },
    {
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);