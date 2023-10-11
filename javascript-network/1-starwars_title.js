const request = require('request');

// Check for proper number of arguments
if (process.argv.length < 3) {
    console.error('Please provide a movie ID as the first argument.');
    process.exit(1);
}

// Extract movie ID from command line arguments
const movieId = process.argv[2];

// Build the URL for the API endpoint
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make the request to the Star Wars API
request(url, function (error, response, body) {
    if (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }

    if (response.statusCode === 404) {
        console.error('Movie not found');
        process.exit(1);
    }

    // Parse the JSON response to an object
    const data = JSON.parse(body);

    // Print the movie title
    console.log(data.title);
});
