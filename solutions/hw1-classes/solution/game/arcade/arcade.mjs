import { Game } from '../game.mjs';

class Arcade extends Game {
    constructor(name, size, price, levels) {
        super(name, size, price);
        this.levels = levels;
    }

    win() {
        console.log(`Пройден(а) игра ${this.name} размером ${this.size} Мб., стоимостью ${this.price} руб. и с(о) ${this.levels} уровнем(ми).`);
    }
}

export { Arcade };
