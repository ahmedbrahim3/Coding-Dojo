from flask_app import app
from flask import redirect,request,render_template,url_for
from flask_app.models.dojo_model import Dojo

@app.route("/")
def index_html():
    return render_template("index.html")



@app.route("/process",methods=['POST'])
def process():
    data = {
    "name": request.form['name'],
    "location": request.form['location'],
    "language": request.form['language'],
    "comment": request.form['comment']}
    if not Dojo.validate(data):
        return redirect('/')
    Dojo.save(data)
    return redirect('/results')

@app.route('/results')
def details():
    return render_template("results.html", user=Dojo.get_last())
