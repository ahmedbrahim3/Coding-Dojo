const Product =require("../model/product.model")



module.exports.getAll=(req,res)=>{
    Product.find()
    .then((result)=> {
        res.status(200).json(result)
    })
    .catch((err)=>{
    res.status(500).json(err)
    })

}

module.exports.getOne=(req,res)=>{
    Product.findOne ({_id : req.params.id})
    .then((result)=> {
        res.status(200).json(result)
    })
    .catch((err)=>{
    res.status(500).json(err)
    })

}

module.exports.create=(req,res)=>{
    Product.create(req.body)
    .then((result)=> {
        res.status(200).json(result)
    })
    .catch((err)=>{
    res.status(400).json(err)
    })

}

module.exports.update=(req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id} , req.body , {
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
    Product.deleteOne({ _id: req.params.id})
    .then((result)=> {
        res.status(200).json(result)
    })
    .catch((err)=>{
    res.status(400).json(err)
    })

}