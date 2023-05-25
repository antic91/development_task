// Import required dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const env = require('dotenv');
const routes = require('./routes/routes.js')

// Set CORS options
const corsOptions = {
    origin: '*',
    credentials: true
}
// Load environment variables from .env file
env.config({ path: './config/.env' });

// Create an instance of Express
const app = express();

// Enable pre-flight CORS request handling
app.options('*', cors(corsOptions));

// Parse JSON bodies
app.use(bodyParser.json()); // json

// Parse URL-encoded bodies
app.use(
bodyParser.urlencoded(
{ extended: true })); // encoded

// Set up CORS headers
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type'); next();
});

// Set additional CORS headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set the port to listen on
const port = process.env.PORT || 5000;

// Set up routes
app.use('/',routes)

// Handle the root route
app.get('/', (req, res) => {
    res.send('Welcome!!!')
});

// Start the server if this file is directly run as the main module
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
}

// Export the Express app
module.exports = app