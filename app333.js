let car1 = {
    name: "bmw",
    year: 2005,
    price: 10000,
};
let car2 = {
    name: "mercedes",
    year: 2013,
    price: 15000,
};
let car3 = {
    name: "mercedes",
    year: 2017,
    price: 20000,
};
let car4 = {
    name: "bmw",
    year: 2019,
    price: 22000,
};
let car5 = {
    name: "opel",
    year: 2005,
    price: 9000,
};

let cars = [car1, car2, car3, car4, car5];

let getCarsName = prompt("Choose a car name:");
getCarsName = getCarsName.toLowerCase().trim(); // Convert to lowercase and remove whitespace

function getFilteredCars(cars, carName) {
    return cars.filter((car) => car.name.toLowerCase().includes(carName));
}

function writeFilteredCars(filteredCars) {
    filteredCars.forEach(function (car) {
        console.log("------------------------------");
        console.log(`| ${car.name} | ${car.price} | ${car.year}`);
        console.log("------------------------------");
    });
}

const filteredCars = getFilteredCars(cars, getCarsName);
writeFilteredCars(filteredCars);
