# __init__.py
from flask import Flask

DATABASE="sasquatchs"


app = Flask(__name__)
app.secret_key = "shhhhhh"
