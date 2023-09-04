const express = require('express');
const path = require('path');
const api = require('./routes/api');
const PORT = process.env.PORT || 3001;
const { readFromFile, writeToFile, readAndAppend } = require('./helpers');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use('/api', api);
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.post('/notes', (req, res) => { //posts new note to db.json from the request body
    const newNote = { //creates new note object from request body
        title: req.body.title,
        text: req.body.text,
    };
    console.log(newNote);

    const pathName = path.join(__dirname, './db/db.json'); //sets path to db.json

    readAndAppend(newNote, pathName); //appends new note to db.json

    res.json(newNote);
    res.end();
    //res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.delete('/notes', (req, res) => {
    //res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});