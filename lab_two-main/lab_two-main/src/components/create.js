import { useState } from "react";
import axios from "axios";

function Create() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);

    const movie = {
      title: title,
      year: year,
      poster: poster
    };

    axios.post('http://localhost:4000/api/movies', movie)
  .then((res) => {
    console.log(res.data); 
    console.log('Newly created movie ID:', res.data.movie._id);
  })
  .catch((err) => console.log(err));

  }

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
