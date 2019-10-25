import { Car } from './car.mjs';

const runTest = () => {
    let car = new Car('автомобиль', '1.5', '2000', '150');

    console.log(car.create());
    console.log(car.move());
    console.log(car.brake());
    console.log(car.open());
};

export { runTest };