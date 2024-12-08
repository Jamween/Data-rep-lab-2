import React from 'react';
import Movies from "./Movies";
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [movies, setMovies] = useState([]); // State to store movie data

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        setMovies(response.data.movies); // Assign the response data to movies state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div>
      <h3>Hello from the Read component.</h3>
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;
