const accessories = require('../models/accessories.js')
module.exports = {
    getAll : (req,res)=> {
        accessories.getAll((err,results)=>{
           err ?  res.status(500).send(err.message) : res.status(200).json(results);
        })
        
    },
    addAccessorie :(req,res)=> {
 
        accessories.addAccessorie ((err,results)=>{
           
            err ?  res.status(500).send(err) : res.status(201).json("created");
        },[req.body.name,req.body.description,req.body.price,req.body.images])
        
    },

    deleteAccessorie : (req,res)=> {
     
        accessories.deleteAccessorie ((err,results)=>{
            err ?  res.json(err) : res.json("deleted");
         },[req.params.id])
    },

    update: (req,res)=> {
     
        accessories.update((err,results)=>{
            err ?  res.send(err) : res.json(results);
         },[req.params.id])
    },

    getOne : (req,res)=> {
     
        accessories.getOne((err,results)=>{
            console.log(req.params.id,"====");
            err ?  res.send(err) : res.json(results);
         },[req.params.id])
    }
   
}
