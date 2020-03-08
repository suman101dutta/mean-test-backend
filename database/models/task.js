const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        trim: true
    },
    list_id : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    flag : {
        type: Boolean,
        default : false,
        required: true
    }
})


const Task = mongoose.model('Task', taskSchema);

module.exports = Task ;