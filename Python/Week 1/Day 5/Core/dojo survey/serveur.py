from flask import Flask, render_template, request, redirect

app = Flask(__name__)
app.secret_key = "so_secret_key"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/result", methods=["POST"])
def result():
    name = request.form.get("name")
    location = request.form.get("location")
    fav_language = request.form.get("fav_language")
    comments = request.form.get("comments")

    return render_template("result.html", name=name, location=location, fav_language=fav_language, comments=comments)

if __name__ == "__main__":
    app.run(debug=True)
