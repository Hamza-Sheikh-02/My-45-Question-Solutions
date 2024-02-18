type CarInfo = {
    manufacturer: string;
    model: string;
    [key: string]: any; // Index signature allowing arbitrary properties
};

function store_car_info(manufacturer: string, model: string, ...options: [string, any][]): CarInfo {
    let car_info: CarInfo = { manufacturer: manufacturer, model: model };

    for (let option of options) {
        let [key, value] = option;
        car_info[key] = value;
    }

    return car_info;
}

let car = store_car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2024]);

console.log(car);
