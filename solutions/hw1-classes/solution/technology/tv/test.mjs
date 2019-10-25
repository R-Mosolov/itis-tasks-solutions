import { Tv } from './tv.mjs';

const runTest = () => {
    let tv = new Tv('телевизор', '1', '20', '35000');

    console.log(tv.create());
    console.log(tv.move());
    console.log(tv.brake());
    console.log(tv.buy());
};

export { runTest };