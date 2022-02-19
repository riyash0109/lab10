const http = require('http')
const { loadjson } = require('./nodejson')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const fs = require("fs");
const { callbackify } = require("util");
const cors = require('cors');
app.use(cors({
    origin: "*",
}))

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log("Server is runnning"));
app.get('/getjson', (req, res) => {
    res.send(loadjson())
})



// Read users.json file
fs.readFile("course.json", function (err, data) {

    // Check for errors
    if (err) throw err;

    // Converting to JSON
    const course = JSON.parse(data);

    console.log(course); // Print users
});



var newFlightDetails = {
    "course_no": 8877,
    "dept": "Ahmedabad",
    "campus": "Delhi",
    "session": 4570,
    "noofseats": 22,
    "HOD": "Vistara"
}



fs.writeFile("newflight4.json", JSON.stringify(newFlightDetails, null, 2), err => {
    if (err) throw err;
    console.log("File written sucessfully!");
})