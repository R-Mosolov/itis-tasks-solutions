import { Technology } from '../technology.mjs';

class Computer extends Technology {
    constructor(name, size, weight, energy) {
        super(name, size, weight);
        this.energy = energy;
    }

    active() {
        console.log(`Запущен(а) ${this.name} размером ${this.size} м, ` +
            `весом ${this.weight} кг и с электропотреблением ${this.energy}W.`);
    }
}

export { Computer };