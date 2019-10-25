import { Animal } from '../animal.mjs';

class Dolphin extends Animal {
    constructor(name, size, weight, iq) {
        super(name, size, weight);
        this.iq = iq;
    }

    feed() {
        console.log(`Накормлен(а) ${this.name} размером ${this.size} м, ` +
            `весом ${this.weight} кг и с IQ ${this.iq}.`);
    }
}

export { Dolphin };