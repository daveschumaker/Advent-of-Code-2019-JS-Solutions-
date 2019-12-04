// https://adventofcode.com/2019/day/1

const rocketMassArray = require('./input.json');

// PART I: Calculate fuel needed for rocket.

const calcFuel = (mass) => {
    return Math.floor(mass / 3) - 2;
}


const fuelRequirements = rocketMassArray.reduce((totalFuel, mass) => {
    return totalFuel + calcFuel(mass);
}, 0);

console.log('Total Fuel Required:', fuelRequirements);