import { Sport } from './sport.mjs';

const runTest = () => {
    let object = new Sport(`"Pro Evolution Soccer"`, '5000', '1399', 'infinity');

    console.log(object.buy());
    console.log(object.run());
    console.log(object.change());
    console.log(object.win());
};

export { runTest };
