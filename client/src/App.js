import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieReviewList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieReviewList(response.data);
    });
  }, []);

  const submitReview = () => {
    axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });
    setMovieReviewList([
      ...movieReviewList,
      { movieName: movieName, movieReview: review },
    ]);
  };

  return (
    <div className="App">
      <h1>CRUD Application</h1>

      <div className="form">
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <label>Review:</label>
        <input
          type="text"
          name="review"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
      </div>

      <button onClick={submitReview}>submit</button>

      {movieReviewList.map((val, index) => {
        return (
          <h1 key={index}>
            Movie Name: {val.movieName} | Movie Review: {val.movieReview}
          </h1>
        );
      })}
    </div>
  );
}

export default App;
