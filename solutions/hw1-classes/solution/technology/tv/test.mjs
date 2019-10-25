import { Tv } from './tv.mjs';

const runTest = () => {
    let object = new Tv('телевизор', '1', '20', '35000');

    console.log(object.create());
    console.log(object.move());
    console.log(object.brake());
    console.log(object.buy());
};

export { runTest };