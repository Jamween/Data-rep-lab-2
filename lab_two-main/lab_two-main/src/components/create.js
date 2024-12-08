import React, { useState } from "react";

function Create() {
  const [title, setTitle] = useState(""); // State for the movie title
  const [year, setYear] = useState(""); // State for the movie year
  const [poster, setPoster] = useState(""); // State for the movie poster URL

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log({ title, year, poster }); // Log the form data to the console
  };

  return (
    <div>
      <h2>Create a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Movie Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Movie Year:</label>
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Movie Poster URL:</label>
          <input
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
