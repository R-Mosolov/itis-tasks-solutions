import { Technology } from '../technology.mjs';

class Tv extends Technology {
    constructor(name, size, weight, price) {
        super(name, size, weight);
        this.price = price;
    }

    buy() {
        console.log(`Куплен(а) ${this.name} размером ${this.size} м, ` +
            `весом ${this.weight} кг и по цене ${this.price}руб.`);
    }
}

export { Tv };