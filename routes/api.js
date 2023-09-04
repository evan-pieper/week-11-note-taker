const api = require('express').Router();
const path = require('path');

api.get('/notes', (req, res) => {
    console.log('api get notes');
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

api.post('/notes', (req, res) => { //posts new note to db.json from the request body
    const newNote = { //creates new note object from request body
        title: req.body.title,
        text: req.body.text,
    };
    console.log(newNote);
});

api.delete('/notes', (req, res) => {
    //res.sendFile(path.join(__dirname, './public/notes.html'));
});

module.exports = api;