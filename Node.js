const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.send("Thank you for your submission!");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
￼Enter
