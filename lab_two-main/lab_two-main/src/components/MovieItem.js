import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const MovieItem = (props) => {
    useEffect(() => {
      console.log("Movie Item:", props.mymovie);
    }, [props.mymovie]);
  
    return (
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Header>{props.mymovie.Title}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={props.mymovie.Poster} alt={props.mymovie.Title} />
          <blockquote className="blockquote mb-0">
            <footer>{props.mymovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  };
  
  export default MovieItem;