class Animal {
    constructor(name, size, weight) {
        this.name = name;
        this.size = size;
        this.weight = weight;
    }

    grow() {
        console.log(`Выращен(а) ${this.name} размером ${this.size} м и весом ${this.weight} кг.`);
    }
    move() {
        console.log(`Перемещен(а) ${this.name} размером ${this.size} м и весом ${this.weight} кг.`);
    }
    kill() {
        console.log(`Усыплен(а) ${this.name} размером ${this.size} м и весом ${this.weight} кг.`);
    }
}

export { Animal };