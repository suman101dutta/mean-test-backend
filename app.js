const express = require('express');
const app = express();
const mongoose = require('./database/config');
const List  = require('./database/models/list');
const Task  = require('./database/models/task');


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});



app.use(express.json());
app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});
/**
 * create new list item
 */
app.post('/create', (req, res) => {
    (new List({'title': req.body.title})).save()
    .then((list) => res.send(list))
    .catch((err) => console.log(err))
});
/**
 * get all list item
 */
app.get('/list', (req, res) => {
    List.find({})
    .then((list) => res.send(list))
    .catch((err) => console.log(err))
});
/**
 * get a list item by id
 */
app.get('/list/:id', (req, res) => {
    List.find({_id:req.params.id})
    .then((list) => res.send(list))
    .catch((err) => console.log(err))
});