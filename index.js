const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
+app.use(cors());

app.get('/search', (req, res) => {
  console.log(req.params);
  res.sendStatus(200);
});

app.get('/surprise', (req, res) => {
  console.log(req.params);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log('MealMaster server is listening to: ', port);
});
