from flask_app import app
from flask import render_template,session,redirect,request,flash
from flask_app.models.email_model import Email

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/success')
def success():
    all_emails=Email.get_all()
    return render_template('success.html',all_emails=all_emails)


@app.route('/register', methods=['post'])
def register():
    if Email.validate(request.form):
        data={'email':request.form['email']}
        Email.create(data)
        return redirect("/success")
    return redirect("/")

@app.route('/delete', methods=['post'])
def delete():
    data={'id':request.form['id']}
    Email.destroy(data)
    return redirect("/success")

