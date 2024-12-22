import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import DisplayBooks from './components/DisplayBooks';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/add" element={<AddBook />} />
                <Route path="/display" element={<DisplayBooks />} />
            </Routes>
        </Router>
    );
};

export default App;
