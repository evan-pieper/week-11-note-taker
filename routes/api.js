const api = require('express').Router();

api.get('api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

api.post('api/notes', (req, res) => { //posts new note to db.json from the request body
    const newNote = { //creates new note object from request body
        title: req.body.title,
        text: req.body.text,
    };
    console.log(newNote);
});

api.delete('api/notes', (req, res) => {
    //res.sendFile(path.join(__dirname, './public/notes.html'));
});

module.exports = api;