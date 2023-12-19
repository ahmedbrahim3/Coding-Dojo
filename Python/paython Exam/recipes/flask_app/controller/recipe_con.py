from flask_app import app
from flask import render_template,session,redirect,request
from flask_app.model.recipe_model import Recipe


@app.route("/recipes/new")  
def index():
    
    return render_template("add.html")


@app.route('/recipes/<int:id>/destroy')
def destroy_recipe(id):
    if 'user_id' not in session:
        return redirect('/')
    data={"id":id}
    Recipe.destroy(data)  # Assuming you have a delete_recipe method in your Recipe model
    return redirect("/recipes")