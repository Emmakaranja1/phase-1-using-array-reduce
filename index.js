const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const BatteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use the reduce method to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// Now totalBatteries should hold the sum of all assembled batteries
console.log(totalBatteries); // Outputs: 31 (sum of [4, 5, 3, 4, 4, 6, 5])
