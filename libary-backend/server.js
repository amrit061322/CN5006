const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Books = require('./BooksSchema');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.get('/allbooks', (req, res) => {
    Books.find((err, books) => {
        if (err) console.log(err);
        else res.json(books);
    });
});

app.get('/getbook/:id', (req, res) => {
    Books.findById(req.params.id, (err, book) => {
        if (err) console.log(err);
        else res.json(book);
    });
});

app.post('/addbooks', (req, res) => {
    const newBook = new Books(req.body);
    newBook.save()
        .then(() => res.json({ message: 'Book added successfully!' }))
        .catch((err) => res.status(400).send('Adding new book failed:', err));
});

app.post('/updatebook/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, (err) => {
        if (err) console.log(err);
        else res.json({ message: 'Book updated successfully!' });
    });
});

app.post('/deleteBook/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id, (err) => {
        if (err) console.log(err);
        else res.json({ message: 'Book deleted successfully!' });
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
