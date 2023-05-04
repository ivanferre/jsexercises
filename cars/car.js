// Objects

const oneCar = {
    brand: "Mazda",
    model: "3",
    color: "grey",
    fuel: "Diesel",
    doors: 4,
    year: 2005,
    checkTankAmount: function () {
        console.log("Hey, you need to drive oneCar to the next station.");
    }
}

oneCar.checkTankAmount();

// object constructor

function CarOC(brand, model, color, fuel, doors, year) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.fuel = fuel;
    this.doors = doors;
    this.year = year;
    this.checkTankAmount = function(){console.log(`Hey, you need to drive your ${this.brand} CarOC to the next station!`)};
}


const myCar = new CarOC ("SEAT", "Ateca", "Dark Red", "Oil", "5", 2020);
console.log("myCar, a CarOC:");
console.log(myCar);
console.log(myCar.checkTankAmount());

// create class Vehicle
class Vehicle {
    constructor(brand, model, color, doors) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.doors = doors;
    }
}

// create class Car
class Car extends Vehicle {
    constructor(brand, model, year, color, fuel, doors) {
        super(brand, model, color, doors);
        this.fuel = fuel;
        this.year = year;
    }

    checkTankAmount() {
         console.log(`Hey, you need to drive your fancy ${this.brand} Car to the next station!`);   
        }
}

let mustafasCar = new Car("Ford", "Fiesta", 1990, "white", "petrol", 3);
console.log("This is Mustafa's car:");
console.table(mustafasCar);
