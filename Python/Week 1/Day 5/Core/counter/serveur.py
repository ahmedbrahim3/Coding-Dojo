from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Set a secret key for session

@app.route("/")
def index():
    # Check if 'counter' is in the session, if not, initialize it to 0
    if 'counter' not in session:
        session['counter'] = 0

    # Increment the counter
    session['counter'] += 1

    # Pass the counter value to the template
    counter_value = session['counter']

    return render_template("index.html", counter_value=counter_value)


@app.route("/increment")
def incremen():
    return redirect("/")
@app.route("/reset")
def reset():
    session.clear()		# clears all keys
    return redirect("/")
if __name__ == "__main__":
    app.run(debug=True)
