import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "./BookSlice";
import "./BookApp.css";

function BookApp() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Fiction");
  const [year, setYear] = useState("");

  const books = useSelector((state) => state.books.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (title.trim() && author.trim() && genre.trim() && year.trim()) {
      dispatch(addBook({ title, author, genre, year }));
      setTitle("");
      setAuthor("");
      setGenre("Fiction");
      setYear("");
    }
  };

  return (
    <div className="book-container">
      <h1>Book Store</h1>

      <div className="book-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />

        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author"
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>

        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Enter year"
        />

        <button onClick={handleAdd}>Add Book</button>
      </div>

      {books.length > 0 && (
        <ul className="book-list">
          {books.map((b, index) => (
            <li key={index} className="book-item">
              <strong>{b.title}</strong> by {b.author} <br />
              <span>Genre: {b.genre}</span> | <span>Year: {b.year}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookApp;
