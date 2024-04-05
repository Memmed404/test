let cars = ["bmw", "mercedes", "toyota"];
cars.push("lada");

cars.unshift("hundai");
console.log(cars);

// alert(cars)

let a = cars.pop();
console.log(a);

cars.shift();
console.log(cars);

cars.splice(3, 0, "lada");
console.log(cars);

cars.splice(0, 2);
console.log(cars);

cars.splice(0, 0, "bmw");
console.log(cars);

cars.splice(1, 1, "mercedes");
console.log(cars);

console.log(typeof cars);
let stringCars = cars.toString();
console.log(typeof stringCars);
console.log(stringCars);

let joinCars = cars.join("||");
console.log(joinCars);

console.log(cars);

let newCars = ["hundai", "lexcus", "Supra MK4"];
let concatCars = cars.concat(newCars);
console.log(concatCars);

console.log(concatCars)
let sliceCars=concatCars.slice(0,3)
console.log(sliceCars)

console.log(concatCars.length)

concatCars.reverse()
console.log(concatCars)


let carsName="lada,bmw,opel"
let carsSplit=carsName.split(',')
console.log( carsSplit)

 console.log(cars)
 let indexofCars=cars.indexOf("mercedes")
 console.log(indexofCars)

 console.log(cars)
 if(indexofCars==0){
    console.log("OKEY")
 }else{
    console.log("NO")
 }

 console.log(cars)
 let includesCars=cars.includes("hundai")
 console.log(includesCars)

 
