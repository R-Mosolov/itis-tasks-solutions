import { Elephant } from './elephant.mjs';

const runTest = () => {
    let object = new Elephant('слон', '5', '3000', '135');

    console.log(object.grow());
    console.log(object.move());
    console.log(object.kill());
    console.log(object.feed());
};

export { runTest };