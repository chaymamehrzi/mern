const express = require("express");
const router = express.Router();
const itemcontroller = require("../controller/itemcontroller");
const  itemmiddleware =require('../middleware/itemmiddleware');


router.post('/additem',itemmiddleware,itemcontroller.additem);
router.get('/getitem', itemcontroller.getitem);
router.put('/updateitem/:id',(req,res) => {itemcontroller.updateitem(req,res)});
router.delete('/delete/:id',itemcontroller.deleteitem);


module.exports=router;

