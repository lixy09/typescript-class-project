import Cattribute from "./Cattribute.js";
export default class Catagotchi {
    catAlive;
    catStatus;
    catMood;
    catEnergy;
    catHunger;
    constructor() {
        this.catAlive = true;
        this.catStatus = 'Happy';
        this.catMood = new Cattribute(10);
        this.catEnergy = new Cattribute(10);
        this.catHunger = new Cattribute(0);
    }
    feed() {
        this.catHunger.decrease(1);
    }
    play() {
        this.catMood.increase(1);
        this.catEnergy.decrease(1);
    }
    pet() {
        this.catEnergy.increase(1);
        this.catHunger.increase(1);
    }
    catDied() {
        this.catAlive = false;
    }
    updateCat() {
        this.catMood.decrease(1);
        this.catEnergy.decrease(1);
        if (this.catEnergy.getValue() === 0)
            this.catDied();
        this.catHunger.increase(1);
        if (this.catHunger.getValue() === 10)
            this.catDied();
        if (this.catEnergy.getValue() < 4 || this.catMood.getValue() < 4 || this.catHunger.getValue() > 6)
            this.catStatus = 'Okay';
        if (this.catEnergy.getValue() < 2 || this.catMood.getValue() < 2 || this.catHunger.getValue() > 8)
            this.catStatus = 'Unhappy';
    }
    getScreen() {
        if (this.catAlive) {
            return `Catagotchi!<br>
    Status: ${this.catStatus}<br>
    Mood:   ${this.catMood.getValue()}<br>
    Energy: ${this.catEnergy.getValue()}<br>
    Hunger: ${this.catHunger.getValue()}`;
        }
        return 'Catagotchi Dead!';
    }
}
//# sourceMappingURL=Catagotchi.js.map