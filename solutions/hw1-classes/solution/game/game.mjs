class Game {
    constructor(name, size, price) {
        this.name = name;
        this.size = size;
        this.price = price;
    }

    buy() {
        console.log(`Куплен(а) игра ${this.name} размером ${this.size} Мб. и стоимостью ${this.price} руб.`);
    }
    run() {
        console.log(`Запущен(а) игра ${this.name} размером ${this.size} Мб. и стоимостью ${this.price} руб.`);
    }
    change() {
        console.log(`Обменен(а) игра ${this.name} размером ${this.size} Мб. и стоимостью ${this.price} руб.`);
    }
}

export { Game };
