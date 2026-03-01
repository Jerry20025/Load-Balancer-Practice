const express = require('express');
const app = express();
const path = require('path');
const OSNetwork = require('os').networkInterfaces()
const ip = OSNetwork['Wi-Fi'][2].address
const port = 3000
const appIdentifier = process.env.APP_NAME
app.use('/images', express.static(path.join(__dirname, 'images')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('Requested by: ' + appIdentifier);
});


app.listen(port, ip, () => {
    console.log(`${appIdentifier} requested and Server is running on port: ${port} and ip address: ${ip}    `);
});