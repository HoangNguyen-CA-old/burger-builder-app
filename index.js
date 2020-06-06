const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello </h1>');
});

app.use('/api/burger', require('./routes/api/orders'));

let db = 'mongodb://localhost:27017/burger-builder';

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((err) => {
    console.log(`\nerror connecting to mongodb:\n\n ${err}`);
  });

let port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
