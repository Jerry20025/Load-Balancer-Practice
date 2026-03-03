const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;        // dynamic port
const appIdentifier = process.env.APP_NAME || 'app';

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('Requested by: ' + appIdentifier);
});

// listen on 0.0.0.0 so Docker can reach it
app.listen(port, '0.0.0.0', () => {
    console.log(`${appIdentifier} running on port: ${port}`);
});