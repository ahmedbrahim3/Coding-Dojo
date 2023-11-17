class Ninja:
    def __init__(self,firstn,lastn,treasts,food,ped) :
        self.firstn=firstn
        self.lastn=lastn
        self.treats=treasts
        self.food=food
        self.ped=ped
    # def feed(slef):
    #     self.ped.eat


class Pets:
    def __init__(self,name,type,health,energy) :
        self.name=name
        self.type=type
        self.health=health
        self.energy=energy
    def heyself(self):
        return f"hey {self.name}"
    def eat(self):
        self.energy+=5
        self.health+=10
    def sleep(self):
        self.energy+=25

