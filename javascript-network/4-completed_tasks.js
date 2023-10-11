const request = require('request');

// Check for proper number of arguments
if (process.argv.length < 3) {
    console.error('Please provide the API URL as the first argument.');
    process.exit(1);
}

// Extract API URL from command line arguments
const apiUrl = process.argv[2];

// Make the request to the API
request(apiUrl, function (error, response, body) {
    if (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }

    // Parse the JSON response to an array
    const todos = JSON.parse(body);

    // Initialize an empty object to hold the count of completed tasks for each user
    const completedTasks = {};

    // Loop through the array of tasks
    for (const task of todos) {
        if (task.completed) {
            if (completedTasks[task.userId]) {
                completedTasks[task.userId] += 1;
            } else {
                completedTasks[task.userId] = 1;
            }
        }
    }

    // Print the object
    console.log(completedTasks);
});
