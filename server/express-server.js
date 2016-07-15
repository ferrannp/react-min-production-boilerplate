var express = require('express');
var compression = require('compression');
var path = require('path');

const app = express();
const PROD = process.env.NODE_ENV === "production";

module.exports = (PORT) => {
  
  app.use('/api/*', function (req, res) {
    res.send('Your backend API.');
  });
  
  if(PROD) {
    app.use(compression());
    app.use(express.static(path.join(process.env.PWD, 'dist')));
    app.get('*', function (req, res) {
      res.sendFile(path.join(process.env.PWD, 'dist/index.html'));
    });
  }
  
  app.listen(PORT);
};
