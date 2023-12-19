from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash


class Sasquatch:
    def __init__(self, data):
            self.id = data["id"]
            self.location = data["location"]
            self.happend = data["happend"]
            self.number = data["number"]
            self.date = data["date"]
            self.created_at = data["created_at"]
            self.updated_at = data["updated_at"]
            self.user_id = data["user_id"]
            self.first_name = data["first_name"]
        

    @classmethod
    def sas_user(cls):
        query="""
            SELECT sasquatch.*,user.first_name
            FROM sasquatch
            JOIN user ON user.id = sasquatch.user_id;
            """
        results = connectToMySQL(DATABASE).query_db(query)
        all_sas=[]
        for row in results:
            print(row)
            all_sas.append(cls(row))
        return all_sas
    @classmethod
    def create(cls,data):
        query="""INSERT INTO sasquatch 
                            (user_id,location,happend,number,date)
                            VALUES (%(user_id)s,%(location)s,%(happend)s,%(number)s,%(date)s);"""
        return connectToMySQL(DATABASE).query_db(query,data)
    @classmethod
    def get_by_id(cls,data):
        query="""SELECT sasquatch.*,user.first_name
            FROM sasquatch
            JOIN user ON user.id = sasquatch.user_id
            WHERE sasquatch.id=%(id)s ;"""
        result=connectToMySQL(DATABASE).query_db(query,data)
        if result:
            return cls(result[0])
        return None
    
    @classmethod
    def update(cls,data):
        
        query=""" UPDATE sasquatch SET location=%(location)s,happend=%(happend)s,date=%(date)s,
                number=%(number)s WHERE id=%(id)s; """
        return connectToMySQL(DATABASE).query_db(query,data)
    
        @classmethod
        def destroy(cls,data):
            query="""DELETE FROM sasquatch  WHERE id=%(id)s;"""
            return connectToMySQL(DATABASE).query_db(query,data)
    


    @staticmethod   
    def validate(data):
        is_valid=True
        if len(data['location'])<3:
            is_valid=False
            flash(" recipe location is required")
        if len(data['happend'])<3:
            is_valid=False
            flash("recipe happend is required")
        if (data['date'])=="":
            is_valid=False
            flash("recipe Date must be provided")
        print(is_valid)
        return is_valid