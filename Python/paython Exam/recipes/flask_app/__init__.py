# __init__.py
from flask import Flask

DATABASE="recipe_schemas"


app = Flask(__name__)
app.secret_key = "shhhhhh"
