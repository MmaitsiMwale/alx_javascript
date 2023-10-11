const request = require('request');

// Check for proper number of arguments
if (process.argv.length < 3) {
    console.error('Please provide the API URL as the first argument.');
    process.exit(1);
}

// Extract API URL from command line arguments
const apiUrl = process.argv[2];

// Make the request to the Star Wars API
request(apiUrl, function (error, response, body) {
    if (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }

    // Parse the JSON response to an object
    const data = JSON.parse(body);

    // Filter the movies where character with ID 18 appears
    const filteredMovies = data.results.filter(movie => movie.characters.includes('https://swapi-api.alx-tools.com/api/people/18/'));

    // Print the number of such movies
    console.log(filteredMovies.length);
});
