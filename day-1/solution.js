// https://adventofcode.com/2019/day/1

const rocketMassArray = require('./input.json');

// Calculate fuel needed for a given mass.
const calcFuel = (mass) => {
    return Math.floor(mass / 3) - 2;
}

// Recursively calculate fuel needed for a given mass of fuel.
const calcFuelForFuel = (fuelMass, totalFuelRequired = 0) => {
    const newFuelMass = calcFuel(fuelMass);

    if (newFuelMass <= 0) {
        return totalFuelRequired;
    }

    totalFuelRequired += newFuelMass;

    return calcFuelForFuel(newFuelMass, totalFuelRequired);
}

const totalFuelForModule = rocketMassArray.reduce((totalFuel, mass) => {
    return totalFuel + calcFuel(mass);
}, 0);

const totalFuelForModuleAndFuel = rocketMassArray.reduce((totalFuel, mass) => {
    const fuelForModule = calcFuel(mass);
    const fuelForFuel = calcFuelForFuel(fuelForModule);
    return totalFuel + fuelForModule + fuelForFuel
}, 0);

console.log('Required Fuel for Module:', totalFuelForModule);
console.log('Required Fuel for Module + Fuel:', totalFuelForModuleAndFuel);