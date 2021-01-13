//Require express (bring in in from node_modules)
const express = require('express');

//Create an express app instance
const app = express();
const PORT = 5000; //we'll tell express to listen on this port

//Set up a static server using express middleware
//If incoming request matches a filename in the server/public folder, serve that to the client
//any request to '/' will have express look for files of a special name (index.html, etc.)
app.use(express.static('server/public'));

//Start up our server on a specified port
app.listen(PORT, function() {
    console.log(`Listening at http://localhost:${PORT}`);
});
