const Author =require("../model/author.model")



module.exports.getAll=(req,res)=>{
    Author.find()
    .then((result)=> {
        res.status(200).json(result)
    })
    .catch((err)=>{
    res.status(500).json(err)
    })

}



module.exports.create=(req,res)=>{
    Author.create(req.body)
    .then((result)=> {
        res.status(200).json(result)
    })
    .catch((err)=>{
    res.status(400).json(err)
    })

}

module.exports.update=(req,res)=>{
    Author.findOneAndUpdate({_id:req.params.id} , req.body , {
        new:true,
        runValidators:true
    })
    .then((result)=> {
        res.status(200).json(result)
    })
    .catch((err)=>{
    res.status(400).json(err)
    })

}

module.exports.delete=(req,res)=>{
    Author.deleteOne({ _id: req.params.id})
    .then((result)=> {
        res.status(200).json(result)
    })
    .catch((err)=>{
    res.status(400).json(err)
    })

}