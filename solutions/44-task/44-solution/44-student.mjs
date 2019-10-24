class Student {
    constructor(_name, _level, _course, _major, _language) {
        this.name = _name;
        this.level = _level;
        this.course = _course;
        this.major = _major;
        this.language = _language;
    }

    set _level(value) {
        if(value < 0) throw Error('Вы ввели отрицательное число.');

        this._level = value;
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