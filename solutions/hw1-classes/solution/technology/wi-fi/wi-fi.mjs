import { Technology } from '../technology.mjs';

class WiFi extends Technology {
    constructor(name, size, weight, price) {
        super(name, size, weight);
        this.price = price;
    }

    sell() {
        console.log(`Продан(а) ${this.name} размером ${this.size} м, ` +
            `весом ${this.weight} кг и по цене ${this.price}руб.`);
    }
}

export { WiFi };