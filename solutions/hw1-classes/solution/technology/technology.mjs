class Technology {
    constructor(name, size, weight) {
        this.name = name;
        this.size = size;
        this.weight = weight;
    }

    create() {
        console.log(`Создан ${this.name} размером ${this.size} м и весом ${this.weight} кг.`);
    }
    move() {
        console.log(`Перемещен ${this.name} размером ${this.size} м и весом ${this.weight} кг.`);
    }
    brake() {
        console.log(`Сломан ${this.name} размером ${this.size} м и весом ${this.weight} кг.`);
    }
}

export { Technology };