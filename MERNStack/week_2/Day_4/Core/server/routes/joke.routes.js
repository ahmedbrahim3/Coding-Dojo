const JokeController= require("../controllers/joke.controller")



module.exports=(app)=>{
app.get("/api/jokes",JokeController.getAll)
app.get("/api/one/:id",JokeController.getOne)
app.post("/api/joke/create",JokeController.create)
app.put("/api/jokes/:id",JokeController.update)
app.delete("/api/jokes/:id",JokeController.deleteone)
}