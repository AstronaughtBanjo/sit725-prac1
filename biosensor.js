// Produce a random number between a range

function generateRandomBetween(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

// Create a class that takes a person and produces a heartbeat

class Biosensor{
    constructor(name){
        this.owner=name;
        this.live();
    }

// Create a function to generate the heart rate and record it into the console
    
    beat(){
        let hr=generateRandomBetween(60,80);
        console.log(this.owner+' has a heartbeat of: '+hr);
    }

// Create a function to endlessly call the heart beat

    live(){
        setInterval(()=>{this.beat()},1000);
    }

}

// Instanciate a new object of class Biosensor

let james=new Biosensor('James');