import { Computer } from './computer.mjs';

const runTest = () => {
    let computer = new Computer('компьютер', '0.5', '3', '220');

    console.log(computer.create());
    console.log(computer.move());
    console.log(computer.brake());
    console.log(computer.active());
};

export { runTest };