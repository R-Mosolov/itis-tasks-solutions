import { Technology } from '../technology.mjs';

class Car extends Technology {
    constructor(name, size, weight, speed) {
        super(name, size, weight);
        this.speed = speed;
    }

    open() {
        console.log(`Открыт ${this.name} размером ${this.size} м,` +
            `весом ${this.weight} кг и со скоростью ${this.speed} км/ч.`);
    }
}

export { Car };