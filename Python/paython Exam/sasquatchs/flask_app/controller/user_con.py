from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_bcrypt import Bcrypt
from flask_app.model.user_model import User
from flask_app.model.sasquatch_model import Sasquatch


bcrypt = Bcrypt(app)



@app.route("/")
def index():
    return render_template("index.html")



@app.route("/users/register", methods=["POST"])
def user_register():
    # print(request.form)
    if not User.validate(request.form):
        return redirect("/")
    # 1 . hash the password
    pw_hashed = bcrypt.generate_password_hash(request.form["password"])
    data = {**request.form, "password": pw_hashed}
    # save user in DB
    user_id = User.create(data)
    session["user_id"] = user_id
    session["first_name"]=data['first_name']

    return redirect("/dashboard")

@app.route("/users/login", methods=["POST"])
def user_login():
    data = {"email": request.form["email"]}
    user_in_db = User.get_by_email(data)
    # if email not found
    if not user_in_db:
        flash("invalid credentials", "log")
        return redirect("/")
    # now check the password
    if not bcrypt.check_password_hash(user_in_db.password, request.form["password"]):
        flash("invalid credentials", "log")
        return redirect("/")

    # * if all is good
    print(f"===> id = {user_in_db.id}")
    session["user_id"] = user_in_db.id
    session["first_name"] = user_in_db.first_name
    return redirect("/dashboard")



@app.route("/dashboard")
def dash():
    # ! Route Guard
    if "user_id" not in session:
        return redirect("/")
    data = {"id": session["user_id"]}
    loggedin_user = User.get_user_by_id(data)
    all_sas= Sasquatch.sas_user ()
    print("========================",all_sas)
    # print('dddddddddddd',all_sas[0]['location'])
    return render_template("dashboard.html", loggedin_user=loggedin_user, all_sas=all_sas)


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")