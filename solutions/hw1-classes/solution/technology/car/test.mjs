import { Car } from './car.mjs';

const runTest = () => {
    let object = new Car('автомобиль', '1.5', '2000', '150');

    console.log(object.create());
    console.log(object.move());
    console.log(object.brake());
    console.log(object.open());
};

export { runTest };