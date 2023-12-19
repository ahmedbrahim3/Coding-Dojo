from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash


class Recipe:
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.decriptions = data["decriptions"]
        self.instructions = data["instructions"]
        self.under = data["under"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
        self.user_id = data["user_id"]
        self.first_name = data["first_name"]

    @classmethod
    def recipe_user(cls):
        query="""
            SELECT recipes.*,user.first_name
            FROM recipes
            JOIN user ON user.id = recipes.user_id;
            """
        results = connectToMySQL(DATABASE).query_db(query)
        all_recipes=[]
        for row in results:
            print(row)
            all_recipes.append(cls(row))
        return all_recipes
    @classmethod
    def destroy(cls,data):
        query="""DELETE FROM recipes WHERE id=%(id)s;"""
        return connectToMySQL(DATABASE).query_db(query,data)
    
        
    