const request = require('request');
const fs = require('fs');

// Check for proper number of arguments
if (process.argv.length < 4) {
    console.error('Please provide the URL to request and the file path to store the body response.');
    process.exit(1);
}

// Extract URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make the request
request(url, function (error, response, body) {
    if (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }

    // Write the body to the file
    fs.writeFile(filePath, body, 'utf8', function (err) {
        if (err) {
            console.error('An error occurred while writing to the file:', err);
            process.exit(1);
        }
    });
});
