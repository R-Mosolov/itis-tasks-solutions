import { Arcade } from './arcade.mjs';

const runTest = () => {
    let object = new Arcade(`"LEGO"`, '2500', '999', '100');

    console.log(object.buy());
    console.log(object.run());
    console.log(object.change());
    console.log(object.win());
};

export { runTest };
