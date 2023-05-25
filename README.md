Table of Contents
-Installation
-Endpoints
-Testing

Installation
Clone the repository: git clone git@github.com:antic91/development_task.git
Install the dependencies: npm install

Usage
Set up the required environment variables. You can create a .env file and define the variables there. Refer to the provided .env.example file for the required variables.
Start the application: node index.js
The application will start running at http://localhost:5000 (or the specified port).

Endpoints
GET /: Returns a welcome message.
GET /next: Returns the next Monday date.
GET /last: Returns the last Monday date.
GET /:date: Returns a random Monday date based on the provided date.

Testing
Run the tests: npm test
The tests will be executed, and the results will be displayed.
