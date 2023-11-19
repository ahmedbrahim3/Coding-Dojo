from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = "so_secret_"

@app.route("/game", methods=["GET", "POST"])
def game():
    if request.method == "POST":
        secret_number = random.randint(1, 100)
        user_guess = int(request.form['num'])
        if user_guess == secret_number:
            result = "Congratulations! You guessed the correct number."
        elif user_guess < secret_number:
            result = "Try again! Your guess is too low."
        else:
            result = "Try again! Your guess is too high."
        
        
        return render_template("index.html", result=result, secret_number=secret_number)
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
