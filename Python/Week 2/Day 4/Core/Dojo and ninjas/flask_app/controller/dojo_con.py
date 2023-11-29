from flask_app import app
from flask import render_template, redirect, request
from flask_app.model.dojo_model import Dojo
# from flask_app.model

@app.route('/')
def add_dojo():
    dojos=Dojo.get_all()
    return render_template("add_dojo.html",dojos=dojos)


@app.route('/create',methods=["POST"] )
def create():
    dojo=request.form
    Dojo.create(dojo)
    print(dojo)
    return redirect("/")


@app.route('/show/<int:id>')
def add_ninja(id):
    data={"dojo_id":id}
    dojo_ninja=Dojo.dojos_ninjas(data)
    return render_template("show.html",dojo=dojo_ninja)


if __name__ == '__main__':
    app.run(debug=True)