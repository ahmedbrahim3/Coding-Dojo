

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
    class Superninja extends Ninja{
    constructor(name){
        super(name)
        this.wisdom=10
    }
    speakWisdom(){
        console.log("what kedhe wkadhe 2 programers kedha wkedha ");
    }



    }

const ninja1 = new Ninja("Hyabusa");
const s1    = new Superninja("elKesah")
console.log(s1);
s1.showStats()
s1.speakWisdom()