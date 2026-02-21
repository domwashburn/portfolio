import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const app = express();

/*eslint-disable no-console */

app.use(compression());
app.use(express.static('gh-pages'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../gh-pages/index.html'));
});

// Open the localhost URL for the server in the default browser
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
