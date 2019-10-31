import { Simulator } from './simulator.mjs';

const runTest = () => {
    let object = new Simulator(`"SIMS"`, '10000', '1299', '50');

    console.log(object.buy());
    console.log(object.run());
    console.log(object.change());
    console.log(object.win());
};

export { runTest };
