from flask import Flask, render_template, request, redirect, session
from model import User
app = Flask(__name__)
app.secret_key = "so_secrett"

@app.route("/")
def index():    
    
    return render_template("add.html")

@app.route("/show")
def show():
    all_users=User.get_all()
    return render_template("show.html",all_users=all_users)

@app.route("/add", methods=["POST"])
def add():
    user={
        "first_name":request.form["first_name"],
        "last_name":request.form["last_name"],
        "email":request.form["email"]
    }
    print(user)
    User.add(user)
    return redirect("/show")
@app.route("/back", methods=["POST"])
def back():
    return redirect("/")
if __name__ == "__main__":
    app.run(debug=True)
