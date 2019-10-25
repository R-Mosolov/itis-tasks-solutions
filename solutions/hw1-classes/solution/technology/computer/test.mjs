import { Computer } from './computer.mjs';

const runTest = () => {
    let object = new Computer('компьютер', '0.5', '3', '220');

    console.log(object.create());
    console.log(object.move());
    console.log(object.brake());
    console.log(object.active());
};

export { runTest };