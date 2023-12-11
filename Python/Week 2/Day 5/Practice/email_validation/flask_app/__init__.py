# __init__.py
from flask import Flask
app = Flask(__name__)
app.secret_key = "laghmani"
DATABASE="email_validation_schema"
