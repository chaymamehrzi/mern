

const mongoose = require('mongoose');

const item  = mongoose.Schema ({

    title:{type:String}, 
    description:{type:String}, 
    createdAt: {type: Date, default: Date.now }
}, 
{ timestamps: true }
);

module.exports = mongoose.model('item',item);

/*const itemSchema = new mongoose.Schema ({
    title:{type:String,required:true},
    description:{type:String,required:true},
    createdAt: {type: Date, default: Date.now }
},
{ timestamps: true }
);


const Item = mongoose.model("item",itemSchema); 



module.exports={Item};*/