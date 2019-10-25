import { Dolphin } from './dolphin.mjs';

const runTest = () => {
    let object = new Dolphin('дельфин', '3', '300', '150');

    console.log(object.grow());
    console.log(object.move());
    console.log(object.kill());
    console.log(object.feed());
};

export { runTest };