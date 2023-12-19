from flask_app import app
from flask import render_template, redirect, request, flash, session
from flask_app.model.sasquatch_model import Sasquatch


@app.route("/new/saghting")
def report():
    if not 'user_id' in session:
        return redirect('/')
    return render_template('report.html')


@app.route('/sas/create',methods=['post'])
def create_recipe():
    print("ddddddddddd",Sasquatch.validate(request.form))
    if Sasquatch.validate(request.form):
        data={**request.form,"user_id":int(session['user_id'])}
        print(data)
        Sasquatch.create(data)
        db_return=Sasquatch.create(data)
        print("$$$$$$$$$$$$$$$$$$$$$$$",db_return)
        return redirect('/dashboard')
    return redirect ('/new/saghting')


@app.route('/<int:id>/edit')
def edit_recipe(id):
    if not 'user_id' in session:
        return redirect('/')
    sas=Sasquatch.get_by_id({'id':id})
    print(sas.date)
    session["sas_id"]=id
    return render_template('edit.html',sas=sas)

@app.route('/sas/update',methods=['post'])
def update_recipe():
    if Sasquatch.validate(request.form):
        data={**request.form,'id':session["sas_id"]}
        # print(data)
        Sasquatch.update(data)
        # print(db_return)
        return redirect('/dashboard')
    return redirect (f'/{session["sas_id"]}/edit')

@app.route('/show/<int:id>')
def one_sas(id):
    if not 'user_id' in session:
        return redirect('/')
    sas=Sasquatch.get_by_id({'id':id})
    return render_template('one_sas.html',sas=sas)


@app.route('/<int:id>/destroy')
def destroy_recipe(id):
    if not 'user_id' in session:
        return redirect('/')
    Sasquatch.destroy({'id':id})
    return redirect("/dashboard")
