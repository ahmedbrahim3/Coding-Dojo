from faskApp.config.mysqlconnection import connectToMySQL
from pprint import pprint


DATABASE="users"
class User:
    def __init__(self, data):
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
    @classmethod
    def get_all(cls):
        query= "SELECT * FROM user;"
        results=connectToMySQL(DATABASE).query_db(query)
        users=[]
        for element in results:
            one_user=cls(element)
            users.append(one_user)
        return users
    @classmethod
    def add(cls,data):
            query="INSERT INTO user (first_name,last_name,email) VALUES (%(first_name)s,%(last_name)s,%(email)s) ;"
            results=connectToMySQL(DATABASE).query_db(query,data)
            return results
    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM user WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        user = cls(result[0])

        return user
    @classmethod
    def update(cls, data):
        update_query = """  
                            UPDATE user
                            SET first_name = %(first_name)s, last_name=%(last_name)s, email=%(email)s
                            WHERE id = %(id)s;

                        """
        result = connectToMySQL(DATABASE).query_db(update_query, data)
        return result
    @classmethod
    def delete(cls,data):
        query="DELETE FROM user WHERE id=%(id)s;"
        return connectToMySQL(DATABASE).query_db(query, data)
