const express = require('express');

const app = express();
const path = require('path');

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, './public')));

const port = process.env.PORT || 5555;
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
