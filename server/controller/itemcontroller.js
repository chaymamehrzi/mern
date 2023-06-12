const item = require('../model/item');


const additem =async (req,res) =>{
    
    try{
        const newitem = {
            title:req.body.title,
            description:req.body.description,
        };
        await item.create(newitem).then((err,response)=>{
            if(err){
                res.send(err)
            }
            else{
              res.send(response)
            }
        })

    }
    catch(e){

        console.log(e,"internal error")
    }
 
   
    
}

const getitem= async (req,res)=>{
    try{
        await item.find().then((err,response)=>{
            if(err){
                res.send(err)
            }
            else{
                res.send(response);
            }
        })
    }
    catch(e){
        console.log(e,"internal error")
    }
}



const updateitem = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body
        const iteme = await item.findById(id);
        iteme.title = title;
        iteme.description = description;
        await iteme .save();
        return res.status(200).json({ item })
    }catch (error) {
        return res.status(500).json({ error })
    }
}


const deleteitem = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const iteme = await item.findById(id);
    await iteme.deleteOne();
    return res.status(200).json({ item: 'deleted successfully' })
}



module.exports={
    additem,getitem,updateitem,deleteitem
}
