

class Ninja{
    constructor(name){
    this.name=name
    this.health=30
    this.speed=3
    this.strength=3
    }

    sayName(){
        console.log(` the Nonja name is ${this.name} `);
    }
    showStats(){
        console.log( this.health, this.speed, this.strength);
    }

    drinkSake(){
        this.health+=10
        console.log(` the health is ${ this.health}`);
    }


}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
