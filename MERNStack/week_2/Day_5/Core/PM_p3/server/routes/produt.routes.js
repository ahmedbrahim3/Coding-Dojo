const ProductController=require("../controllers/product.controller")


module.exports=(app)=>{
    app.get("/api/products",ProductController.getAll)
    app.get("/api/one/:id",ProductController.getOne)
    app.post("/api/create",ProductController.create)
    app.patch("/api/up/:id",ProductController.update)
    app.delete("/api/delete/:id",ProductController.delete)
}
