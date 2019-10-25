import { WiFi } from './wi-fi.mjs';

const runTest = () => {
    let tv = new WiFi('wi-fi', '0.01', '0.005', '3000');

    console.log(tv.create());
    console.log(tv.move());
    console.log(tv.brake());
    console.log(tv.sell());
};

export { runTest };