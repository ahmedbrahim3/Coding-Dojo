from flask_app import app
from flask import render_template, redirect, request
from flask_app.model.ninja_model import Ninja
from flask_app.model.dojo_model import Dojo



@app.route('/add_ninja')
def ninja():
    dojos=Dojo.get_all()
    
    return render_template("add_ninja.html",dojos=dojos)

@app.route('/add_ninjaa',methods=["POST"])
def add_ninjaa():
    print("$$$$$$$",request.form)
    Ninja.add(request.form)
    return redirect("/")

# from flask_app.model.ninja_model import 