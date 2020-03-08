const mongoose = require('mongoose');

mongoose.Promise = global.Promise;  

mongoose.connect('mongodb://127.0.0.1:27017/task-management',{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('Mongo connected at 27017'))
    .catch((err) => console.log(err));
module.exports = mongoose;

