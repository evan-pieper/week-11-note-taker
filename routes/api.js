const api = require('express').Router();
const path = require('path');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers');

api.get('/notes', (req, res) => {
    console.log('api get notes');
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

api.post('/notes', (req, res) => { //posts new note to db.json from the request body
    const newNote = { //creates new note object from request body
        title: req.body.title,
        text: req.body.text,
        id: req.body.id,
    };
    console.log(newNote);

    const pathName = path.join(__dirname, '../db/db.json'); //sets path to db.json

    readAndAppend(newNote, pathName); //appends new note to db.json

    res.json(newNote);
    res.end();
});

api.delete('/notes', (req, res) => {
    //res.sendFile(path.join(__dirname, './public/notes.html'));
});

module.exports = api;