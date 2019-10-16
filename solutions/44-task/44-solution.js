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

const Roman = new Student(
    'Roman',
    'master',
    '1',
    'frontend',
    'JavaScript'
);

const runTest = () => {
    console.log(Roman.name);
    console.log(Roman.level);
    console.log(Roman.course);
    console.log(Roman.major);
    console.log(Roman.language);

    Roman.sayHello();
    Roman.sayThanks();
    Roman.goHome();
    Roman.currentCondition();
    Roman.currentIdea();
};

runTest();