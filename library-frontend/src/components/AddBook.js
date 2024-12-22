import React, { useState } from "react";
import axios from 'axios';

export default function Book_Form() {
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    const bookData = { ...state };
    axios.post("http://localhost:5000/addbooks", bookData)
      .then(res => console.log(res.data));
  };

  return (
    <form onSubmit={OnSubmit}>
      <input name="booktitle" onChange={handleChange} value={state.booktitle} />
      <input name="author" onChange={handleChange} value={state.author} />
      {/* Additional form fields */}
      <button type="submit">Add Book</button>
    </form>
  );
}
