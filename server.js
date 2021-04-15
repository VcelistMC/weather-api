// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const PORT = 8080;
app.listen(
    PORT,
    function () {
        console.log(`Server running on ${PORT}`);
    }
)

app.get('/all', function (req, res) {
    res.send(projectData);
})

app.post('/add', function (req, res) {
    const data = req.body;
    var newObj = {
        temp: data.temperature,
        date: data.date,
        user_res: data.feelings
    }
    projectData.push(newObj);
    console.log(newObj);
})