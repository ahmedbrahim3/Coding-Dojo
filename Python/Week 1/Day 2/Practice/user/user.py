class user:
    def __init__(self, fname, lname, email,age,is_rewards_member=False,gold_card_points=500):
        self.fname=fname
        self.lname=lname
        self.email=email
        self.age=age
        self.is_rewards_member=is_rewards_member
        self.gold_card_points = gold_card_points

    def display_info(self):
        print(f"my name is {self.fname} my laqt name is {self.lname} my email is {self.email} my points are {self.gold_card_points} ")
        return self

    def enroll(self):
        self.is_rewards_member=True
        self.gold_card_points= 500
        print(f"is_rewards_member is {self.is_rewards_member} and the points are {self.gold_card_points}")
        return self


    def spend_points(self, amount):
        self.gold_card_points-=amount
        print(f"the points are {self.gold_card_points}")
        return self


            

user1=user ("ahmed","brahim","a@g.c",22)
user2=user ("bbbb","brahim","a@g.c",22)
user3=user ("aaa","brahim","a@g.c",22)
user1.display_info().enroll().spend_points(50).display_info()
user2.enroll().spend_points(80).display_info()


