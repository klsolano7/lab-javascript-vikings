// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
        this.attack = function(){
            return strength;
        }
        this.receiveDamage = function(damage){
            this.health -= damage;
        }
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    attack = function(){
        return this.strength;
    }
    receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry = function(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    
    receiveDamage = function(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let i = randNum(this.vikingArmy.length)
        let e = randNum(this.saxonArmy.length)
        let results = this.saxonArmy[i].receiveDamage(this.vikingArmy[i].strength);
        console.log(results)
        if(this.saxonArmy[i].health <= 0){
            this.saxonArmy.splice(i, 1);
            return results;
        } else {
            return results;
        }

    }
    saxonAttack(){
        let i = randNum(this.saxonArmy.length)
        let e = randNum(this.vikingArmy.length)
        let results = this.vikingArmy[i].receiveDamage(this.saxonArmy[i].strength);
        if(this.vikingArmy[i].health <= 0){
            this.vikingArmy.splice(i, 1);
            return results;
        } else {
            return results;
        }
    }
    showStatus(){
        if(this.saxonArmy.length <= 0){
            return "Vikings have won the war of the century!"
        } else if(this.vikingArmy.length <= 0){
            return 'Saxons have fought for their lives and survive another day...'
        } else {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}

function randNum(x){
    return Math.floor(Math.random() *  Math.floor(x));
}