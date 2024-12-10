const express = require('express');
const app = express();
const port = 4000; // Server will run on http://localhost:4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.qf3py.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Define movie schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

// Create Movie model
const Movie = mongoose.model('Movie', movieSchema);

app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Parse JSON request bodies

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// POST route to handle adding a new movie to the database
app.post('/api/movies', async (req, res) => {
    try {
      console.log("POST /api/movies reached");
      console.log("Movie received:", req.body);
  
      const { title, year, poster } = req.body;
      const newMovie = new Movie({ title, year, poster });
      await newMovie.save(); // Save to database
  
      // Log the saved movie document which includes the _id
      console.log("New movie saved:", newMovie);
  
      res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
    } catch (error) {
      console.error('Error adding movie', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  

app.get('/api/movies', async (req, res) => {
    try {
      // Fetch all movies from the database
      const movies = await Movie.find({});
      // Send the movies as JSON
      res.json(movies);
    } catch (error) {
      console.error('Error retrieving movies:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.get('/api/movie/:id', async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error) {
      console.error('Error retrieving movie by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.put('/api/movie/:id', async (req, res) => {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body,          // The updated fields (title, year, poster)
        { new: true }      // Return the updated document
      );
  
      if (updatedMovie) {
        res.json(updatedMovie);
      } else {
        res.status(404).json({ message: 'Movie not found' });
      }
    } catch (error) {
      console.error('Error updating movie:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.delete('/api/movie/:id', async (req, res) => {
    try {
      console.log('Deleting movie with ID:', req.params.id);
      const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
      if (deletedMovie) {
        res.status(200).json({ message: "Movie deleted successfully", movie: deletedMovie });
      } else {
        res.status(404).json({ message: "Movie not found" });
      }
    } catch (error) {
      console.error('Error deleting movie:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/debug/movies', async (req, res) => {
    const allMovies = await Movie.find({});
    res.json(allMovies);
  });
  
  
  
  


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
