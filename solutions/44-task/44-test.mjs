import { Roman } from './44-solution/44-roman.mjs';

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

    Roman._level = -1;
    console.log(Roman.level);
};

export { runTest };