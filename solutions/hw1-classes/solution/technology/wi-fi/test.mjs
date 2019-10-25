import { WiFi } from './wi-fi.mjs';

const runTest = () => {
    let object = new WiFi('wi-fi', '0.01', '0.005', '3000');

    console.log(object.create());
    console.log(object.move());
    console.log(object.brake());
    console.log(object.sell());
};

export { runTest };