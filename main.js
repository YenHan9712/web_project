let express = require('express');
let path = require('path');
let app = express();
let port = process.env.PORT || 8888;
let stay = require('./stay.js');
let yoga = require('./yoga.js');
let agri = require('./agri.js');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'Homepage.html'));
});

app.get('/about', (req, res) =>{
  res.sendFile(path.join(__dirname, 'About.html'));
});

app.use('/stay', stay)
app.use('/yoga', yoga)
app.use('/agri', agri)

app.listen(port, () => {
  console.log(`Server started at ${port}`)});