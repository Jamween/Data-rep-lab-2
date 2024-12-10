import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MovieItem = (props) => {
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]);

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete('http://localhost:4000/api/movie/' + props.myMovie._id)
      .then(() => {
        props.Reload();
      })
      .catch((error) => {
        console.error("Error deleting movie:", error);
      });
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Header>{props.myMovie.title}</Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={props.myMovie.poster} alt={props.myMovie.title} />
        <blockquote className="blockquote mb-0">
          <footer>{props.myMovie.year}</footer>
        </blockquote>
        <br/>
        {/* Edit Link */}
        <Link to={"/edit/" + props.myMovie._id} className="btn btn-primary" style={{ marginRight: "10px" }}>Edit</Link>
        {/* Delete Button */}
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
