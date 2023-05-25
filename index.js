const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const env = require('dotenv');
const routes = require('./routes/routes.js')

const corsOptions = {
    origin: '*',
    credentials: true
}

env.config({ path: './config/.env' });

const app = express();

app.options('*', cors(corsOptions));

app.use(bodyParser.json()); // json

app.use(
bodyParser.urlencoded(
{ extended: true })); // encoded

//CORS
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type'); next();
});//CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const port = process.env.PORT || 5000;


app.use('/',routes)

app.get('/', (req, res) => {
    res.send('Welcome!!!')
});

//app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app