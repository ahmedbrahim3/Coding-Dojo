class Ninja:
    def __init__(self, firstn, lastn, treats, food, pet):
        self.firstn = firstn
        self.lastn = lastn
        self.treats = treats
        self.food = food
        self.pet = pet

    def walk(self):
        self.pet.play()
        print(f"{self.firstn} walks with {self.pet.name}")

    def feed(self):
        self.pet.eat(self.food)
        print(f"{self.firstn} feeds {self.pet.name}")

    def bathe(self):
        self.pet.bathe()
        print(f"{self.firstn} bathes {self.pet.name}")


class Pets:
    def __init__(self, name, pet_type, health, energy):
        self.name = name
        self.pet_type = pet_type
        self.health = health
        self.energy = energy

    def hey(self):
        return f"Hey {self.name}"

    def eat(self, food):
        self.energy += 5
        self.health += 10
        print(f"{self.name} eats {food}")

    def sleep(self):
        self.energy += 25
        print(f"{self.name} sleeps")

    def play(self):
        self.energy -= 10
        print(f"{self.name} plays")

    def noise(self):
        print(f"{self.name} makes noise")

    def bathe(self):
        self.health += 5
        print(f"{self.name} is being bathed")



pet_instance = Pets("Whiskers", "Cat", 40, 60)


ninja_instance = Ninja("Alice", "Smith", "Fish", "Cat Food", pet_instance)


print(f"Ninja Name: {ninja_instance.firstn} {ninja_instance.lastn}")
print(f"Ninja's Pet Name: {ninja_instance.pet.name}")
print(f"Pet Type: {ninja_instance.pet.pet_type}")


ninja_instance.feed()
ninja_instance.walk()
ninja_instance.bathe()
