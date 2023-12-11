class Player:
    def __init__(self,player_data):
        self.name = player_data["name"]
        self.age = player_data["age"]
        self.position = player_data["position"]
        self.team = player_data["team"]

# challenge2
# kevin = {
#     "name": "Kevin Durant", 
#     "age":34, 
#     "position": "small forward", 
#     "team": "Brooklyn Nets"
# }
# jason = {
#     "name": "Jason Tatum", 
#     "age":24, 
#     "position": "small forward", 
#     "team": "Boston Celtics"
# }
# kyrie = {
#     "name": "Kyrie Irving", 
#     "age":32,
#     "position": "Point Guard", 
#     "team": "Brooklyn Nets"
# }
# player_kevin=Player(kevin)
# player_jason=Player(jason)
# player_kyrie=Player(kyrie)
# print(player_jason)

#challenge3
players = [
    {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Damian Lillard", 
        "age":33,
        "position": "Point Guard", 
        "team": "Portland Trailblazers"
    },
    {
        "name": "Joel Embiid", 
        "age":32,
        "position": "Power Foward", 
        "team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]
new_team=[]
for i in players:
    new_team.append(Player(i))
print(new_team)

