const express = require('express');
const app = express();
const port = 3000;

// Movies route
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // Send movies as JSON response
    res.status(200).json({ myMovies: movies });
 
});

const path = require('path');

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static('public'));

app.get('/name', (req, res) => {
    const { firstname, lastname } = req.query;
    res.send(`Hello ${firstname} ${lastname}`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/name', (req, res) => {
    const { firstname, lastname } = req.body;
    res.send(`Hello ${firstname} ${lastname}`);
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



