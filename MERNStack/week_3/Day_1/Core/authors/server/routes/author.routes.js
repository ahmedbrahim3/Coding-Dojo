const AothorController=require("../controllers/author.controller")


module.exports=(app)=>{
    app.get("/api/authors",AothorController.getAll)
    app.post("/api/create",AothorController.create)
    app.patch("/api/up/:id",AothorController.update)
    app.delete("/api/delete/:id",AothorController.delete)
}
