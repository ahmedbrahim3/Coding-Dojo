from ..config.mysqlconnection import connectToMySQL
from flask import flash

class Dojo:
    def __init__(self,data):
        self.id=data['id']
        self.name=data['name']
        self.language=data['language']
        self.location=data['location']
        self.comment=data['comment']
        self.created_at=data['created_at']
        self.updated_at=data['updated_at']
        
    @classmethod
    def save(cls,data):
        query="INSERT INTO dojos(name,location,language,comment) VALUES (%(name)s,%(location)s,%(language)s,%(comment)s);"
        return connectToMySQL('dojo_survey_schema').query_db(query,data)
    
    @staticmethod
    def validate(data):
        is_valid = True # we assume this is true
        if len(data['name']) < 3:
            flash("Name must be at least 3 characters.")
            is_valid = False
        if data['location']=="":
            flash("location needed")
            is_valid = False
        if data['language']=="":
            flash("language needed")
            is_valid = False
        return is_valid
    @classmethod
    def get_last(cls):
        query = "SELECT * FROM dojos ORDER BY dojos.id DESC LIMIT 1;"
        result = connectToMySQL('dojo_survey_schema').query_db(query)
        return cls(result[0])
 