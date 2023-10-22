

const mongoose = require('mongoose');

const item  = mongoose.Schema ({

    title:{type:String}, 
    description:{type:String}, 
    createdAt: {type: Date, default: Date.now }
}, 
{ timestamps: true }
);

module.exports = mongoose.model('item',item);
