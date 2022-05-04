class Ninja{
    constructor(name){
        this.name=name;
        this.health=3;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log("Name:",this.name)
    }
    showStats(){
        console.log("Name:",this.name ," Strength: ",this.strength," Speed: ",this.speed," Health: ", this.health)
    }
    drinkSake(){
        this.health+=10;
    }
}

class Sensai extends Ninja{
    constructor(name){
        super(name);
        this.health=200;
        this.speed=10;
        this.strength=10;
        this.wisdom=10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

let ninja1= new Ninja("John")
ninja1.drinkSake();
ninja1.showStats();
let sensai1=new Sensai("Jimmy")
sensai1.speakWisdom();
sensai1.showStats();