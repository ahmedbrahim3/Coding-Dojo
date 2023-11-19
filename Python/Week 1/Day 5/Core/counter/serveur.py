from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "your_secret_key"  

@app.route("/")
def index():
    
    if 'counter' not in session:
        session['counter'] = 0

    
    session['counter'] += 1

    counter_value = session['counter']

    return render_template("index.html", counter_value=counter_value)


@app.route("/increment")
def incremen():
    return redirect("/")
@app.route("/reset")
def reset():
    session.clear()		
    return redirect("/")
if __name__ == "__main__":
    app.run(debug=True)
