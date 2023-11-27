from faskApp import app
from flask import render_template, redirect, request
from faskApp.model.user import User



@app.route("/")
def index():    
    
    return render_template("add.html")



@app.route("/show")
def show():    
    users=User.get_all()
    return render_template("show.html",users=users)





@app.route("/showone/<int:id>")
def show_one(id):
    one_user = User.get_one({"id": id})
    print(one_user)
    return render_template("showOne.html", one_user=one_user)
    




@app.route("/add", methods=["POST"])
def add():
    data={
        "first_name":request.form["first_name"],
        "last_name":request.form["last_name"],
        "email":request.form["email"]
    }
    print(data)
    User.add(data)
    return redirect("/show")
@app.route("/up/<int:id>")
def up(id):
    one_user = User.get_one({"id": id})
    return render_template("update.html",one_user=one_user)



@app.route("/update/<int:id>", methods=["POST"])
def update(id):
    data={
        **request.form,
        "id": id,

    }
    print(data)
    User.update(data)
    return redirect("/show")

@app.route("/del/<int:id>", methods=["POST"])
def delete(id):
    data = {
        "id": id,
    }   
    print(data)
    User.delete(data)
    return redirect("/show")


