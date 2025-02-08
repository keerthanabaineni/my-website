const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// Middleware
app.use(bodyParser.json());

// ✅ Add a route for `/`
app.get('/', (req, res) => {
    res.send('Hello! Your Express server is running.');
});

// POST endpoint to save contact form data
app.post('/save-contact', (req, res) => {
    const { name, email, message } = req.body;

    // Save the data to a file (or database)
    const contactData = { name, email, message };

    // Save data in a JSON file
    fs.appendFile('contactData.json', JSON.stringify(contactData) + '\n', (err) => {
        if (err) {
            res.status(500).send('Error saving contact data');
        } else {
            res.status(200).send('Contact data saved');
        }
    });
});
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));  // Serve static files

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

