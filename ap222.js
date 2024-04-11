let car1={
   name:"bmw",
   year:2005
   price:10000
}
let car2={
   name:"mercedes"
   year:2013
   price:15000
}
let car3={
   name:"mercedes"
   year:2017
   price:20000
}
let car4={
   name:"bmw"
   year:2019
   price:22000
}
let car5={
   name:"opel"
   year:2005
   price:9000
}

let cars=[car1,car2,car3,car4,car5];

let getCarsName=prompt("choose a car name:");
// getCarsName=getCarsName.toLocaleLowerCase().trim()

// let filtredcars=[]

getfiltredcars(cars);
writefiltredcars(filtredcars);

function getfiltredcars(cars){
    cars.forEach(function(car){
        if(car.name.toUpperCase().includes(getCarsName,0)){
            filtredcars.push(car);
        }
    });

}

function writefiltredcars(cars){
    cars.forEach(function(car){
        console.log("------------------------------");
    console.log("|"+car.name+"|"+car.price+"|"+car.year);
    console.log("------------------------------");
    });
}