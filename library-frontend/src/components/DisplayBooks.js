import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get('http://localhost:5000/allbooks');
            setBooks(res.data);
        };
        fetchBooks();
    }, []);

    return (
        <ul>
            {books.map((book) => (
                <li key={book._id}>{book.booktitle}</li>
            ))}
        </ul>
    );
};

export default DisplayBooks;
