class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.thirst = 100;
        this.bored = 10;
    }

    drinks() {
        this.thirst += 5;
        console.log(`${this.name}'s thirst is now ${this.thirst}`);
        return this;
    }

    healthy() {
        this.health += 5;
        console.log(`${this.name}'s health is now ${this.health}`);
        return this;
    }

    eats() {
        this.health += 5;
        this.hunger += 10;
        console.log(`${this.name}'s hunger level is now ${this.hunger}`);
        return this;
    }

    stats() {
        return console.table({
            name: this.name,
            health: this.health,
            hunger: this.hunger,
            thirst: this.thirst,
        });
    }
}

class Pet extends Tamagotchi {
    constructor(name, happy, restless) {
        super(name);
        this.happy = happy;
        this.restless = restless;
    }

    playGames() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} is happy`);
        return this;
    }

    walks() {
        console.log(`Taking ${this.name} for a walk, they are ${this.happy}`);
        this.health += 10;
        return this;
    }

    isBored() {
        this.bored += 10;
        console.log(`${this.name} is ${this.restless} and wants to play`);
        return this;
    }
}

const etchi = new Tamagotchi('etchi');
etchi.drinks().healthy().eats().stats();

const myPet = new Pet('etchi', 'very happy', 'a little restless');
myPet.playGames().walks().isBored().stats();
