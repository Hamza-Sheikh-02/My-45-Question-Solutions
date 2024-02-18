"use strict";
function store_car_info(manufacturer, model, ...options) {
    let car_info = { manufacturer: manufacturer, model: model };
    for (let option of options) {
        let [key, value] = option;
        car_info[key] = value;
    }
    return car_info;
}
let car = store_car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2024]);
console.log(car);
