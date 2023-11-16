from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'dojo!'

@app.route('/say/<name>')
def heyName(name):
    return 'heey ,'+ name

@app.route('/reapet/<NUM>/<word>')
def reapet(NUM,word):
    result=""
    for words in range(int(NUM)):
        result+=word+' '
    return result

if __name__ == "__main__":
    app.run(debug=True)


