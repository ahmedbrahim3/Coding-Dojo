from flask import Flask, render_template

app = Flask(__name__)

@app.route('/<x>/<y>/<color>/<color1>')
def reapet(x,y,color,color1):
    return render_template("index.html",x=x,y=y,color=color,color1=color1)




if __name__ == "__main__":
    app.run(debug=True)