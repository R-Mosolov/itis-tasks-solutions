class Student {
    constructor(name, level, course, major, language) {
        this.name = name;
        this.level = level;
        this.course = course;
        this.major = major;
        this.language = language;
    }

    sayHello() {
        console.log('Здравствуйте!');
    }
    sayThanks() {
        console.log('Спасибо за лекцию!');
    }
    goHome() {
        console.log('Иду домой.');
    }
    currentCondition() {
        console.log('Чувствую себя отлично.');
    }
    currentIdea() {
        console.log('Думаю о великом.');
    }
}

export { Student };