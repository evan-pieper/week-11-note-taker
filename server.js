const path = require('path');
const app = require('./routes/index.js');
const express = require('express');
const PORT = process.env.PORT || 3001;
const router = express.Router();
const { readFromFile, writeToFile, readAndAppend } = require('./helpers');


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});