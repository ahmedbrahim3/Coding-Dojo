from ..config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class Email:
    def __init__(self,data):
        self.id=data['id']
        self.email=data['email']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
    
    @classmethod
    def create(cls,data):
        query="INSERT INTO emails(email) VALUES (%(email)s);"
        return connectToMySQL(DATABASE).query_db(query,data)
    
    @classmethod
    def get_all(cls):
        query="SELECT * FROM emails;"
        all_emails=[]
        results=connectToMySQL(DATABASE).query_db(query)
        for row in results:
            all_emails.append(cls(row))
        return all_emails
    
    @classmethod
    def get_one_by_id(cls,data):
        query="SELECT * FROM emails WHERE emails.id=%(id)s;"
        result=connectToMySQL(DATABASE).query_db(query,data)
        return cls(result[0])
    
    @classmethod
    def get_by_email(cls,data):
        query="""SELECT * FROM emails WHERE email=%(email)s"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        if result:
            return cls(result[0])
        return False

    @classmethod
    def destroy(cls, data):
        query = """ DELETE FROM emails WHERE id=%(id)s;"""
        return connectToMySQL(DATABASE).query_db(query, data)

    @staticmethod
    def validate(data):
        is_valid=True
        # email validation
        # email pattern:regex
        if not EMAIL_REGEX.match(data['email']):
            flash("invalid email address")
            is_valid=False
        #email must be unique
        if Email.get_by_email({'email':data['email']}):
            flash("Email already in use, hope by you")
            is_valid=False
        return is_valid
    