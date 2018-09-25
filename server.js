// server.js
// where your node app starts

// init project
const express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// Header Parser Microservice Endpoints
// Returns ip, language & software info.
app.get("/api/whoami", (req, res) => {
  const reqIP = req.ip,
        reqLanguage = req.headers['accept-language'],
        info = req.headers['user-agent'],
        parsedHeader = {
          'ipaddress': reqIP,
          'language': reqLanguage,
          'software': info
        };
  res.json(parsedHeader);
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
