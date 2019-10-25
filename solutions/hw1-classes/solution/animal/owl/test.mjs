import { Owl } from './owl.mjs';

const runTest = () => {
    let object = new Owl('сова', '0.3', '6', '120');

    console.log(object.grow());
    console.log(object.move());
    console.log(object.kill());
    console.log(object.feed());
};

export { runTest };