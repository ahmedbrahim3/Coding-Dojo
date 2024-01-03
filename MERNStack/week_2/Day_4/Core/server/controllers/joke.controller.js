const Joke =require("../model/joke.model")


module.exports.getAll=(req,res)=>{
Joke.find()
.then((jokes)=>{
res.json(jokes)
})
.catch((err)=> res.json(err))
}

module.exports.getOne = (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then((oneJoke) => {
        res.json(oneJoke);
      })
      .catch((err) => res.json(err));
  };

  module.exports.create = (req, res) => {
    Joke.create(req.body)
      .then((newJoke) => {
        res.json(newJoke);
      })
      .catch((err) => res.json(err));
  };

  module.exports.update = (req, res) => {
    Joke.findOneAndUpdate({_id:req.params.id} , req.body ,{
        new:true,
        runValidators:true
    })
      .then((updated) => {
        res.json(updated);
      })
      .catch((err) => res.json(err));
  };
  
  module.exports.deleteone = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => res.json(err));
  };

  
  