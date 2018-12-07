'use strict';

const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send("Hello world");
})

app.listen(PORT, _ => console.log(`Server listenning on port ${PORT}`))