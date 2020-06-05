let express = require('express');

let app = express();

let port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello </h1>');
});

app.use('/api/burger', require('./routes/api/burger'));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
