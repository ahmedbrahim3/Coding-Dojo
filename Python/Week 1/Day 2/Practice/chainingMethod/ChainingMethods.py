class user:
    def __init__(self,first_value,last_value,email_value,age_value,is__rewards_member_value=False,gold_card_points_value=0):
        self.first_name=first_value
        self.last_name=last_value
        self.email=email_value
        self.age=age_value
        self.is_rewards_member=is__rewards_member_value
        self.gold_card_points=gold_card_points_value
        return None
    def display_info(self):
        print(f'{self.first_name}\n{self.last_name}\n{self.email}\n{self.age}\n{self.is_rewards_member}\n{self.gold_card_points}')
        return self
    def enroll(self):
        if (self.is_rewards_member==False):
            self.gold_card_points=200
            self.is_rewards_member=True
        else :
            print("user is already member")
        return self
    def spend_points(self,points):
        if (self.gold_card_points- points )>0:
            self.gold_card_points-=points
        else:
            print("no more points")
        return self
    
user1=user("anis","lagh","anislagh@gmail.com",28)
user1.display_info().enroll().spend_points(50).display_info()
# ---------
user2=user("alaa","mohsni","anislagh@gmail.com",28)
user2.enroll().spend_points(80).display_info()


