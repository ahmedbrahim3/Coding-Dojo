from flask_app.config.mysqlconnection import connectToMySQL
from pprint import pprint
from flask_app.model import ninja_model


DATABASE = "dojo_and_ninja"

class Dojo:
    def __init__(self,data):
        self.id=data["id"]
        self.name=data["name"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]
        self.all_ninjas=[]
    @classmethod
    def get_all(cls):
        query="SELECT * FROM dojos;"
        results = connectToMySQL(DATABASE).query_db(query)
        dojos=[]
        for row in results:
            one_dojo=cls(row)
            dojos.append(one_dojo)
        return dojos
    @classmethod
    def create(cls,data):
        query="INSERT INTO dojos (name) VALUES (%(name)s);"
        results = connectToMySQL(DATABASE).query_db(query,data)
        return results
    @classmethod
    def dojos_ninjas(cls,id):
        query="""
            SELECT *
            FROM dojos
            JOIN ninjas ON dojos.id = ninjas.dojos_id
            WHERE dojos.id=%(dojo_id)s;
            """
        results = connectToMySQL(DATABASE).query_db(query,id)
        
        dojo=cls(results[0])
        ninjaa=[]
        for row in results:
            ninja={
                "id":row["ninjas.id"],
                "first_name": row["first_name"],
                "last_name": row["last_name"],
                "age": row["age"],
                "created_at": row["ninjas.created_at"],
                "updated_at": row["ninjas.updated_at"],
                "dojos_id": row["dojos_id"],
            }

            ninjaa.append(ninja_model.Ninja(ninja))
            print("*************",ninjaa)
        dojo.all_ninjas=ninjaa
        

        return dojo









    

