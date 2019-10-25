class Technology {
    constructor(name, size, weight) {
        this.name = name;
        this.size = size;
        this.weight = weight;
    }

    create() {
        console.log(`Создан(а) ${this.name} размером ${this.size} м и весом ${this.weight} кг.`);
    }
    move() {
        console.log(`Перемещен(а) ${this.name} размером ${this.size} м и весом ${this.weight} кг.`);
    }
    brake() {
        console.log(`Сломан(а) ${this.name} размером ${this.size} м и весом ${this.weight} кг.`);
    }
}

export { Technology };