const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/search', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.post('/surprise', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log('MealMaster server is listening to: ', port);
});
