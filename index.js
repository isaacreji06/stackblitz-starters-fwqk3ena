const express = require('express');
const { resolve } = require('path');
require("dotenv").config({
  path:"./.env",
})
isAdmin=process.env.IS_ADMIN
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  if (isAdmin=="true"){
    res.send({"isAdmin":isAdmin,"message":"Welcome Admin"})
  }
  else if(isAdmin=="false"){
    res.send({"isAdmin":isAdmin,"message":"Welcome User"})
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
