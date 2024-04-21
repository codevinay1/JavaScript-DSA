console.log("Calculate the average of numbers in an array of numbers")
console.log("Example array: [1, 3, 9, 15, 90,]");
console.log("Expected out: 23.6");
function AverageArray(ar1){
    let n = ar1.length;
    let sum = 0;
    for(let i = 0; i<n; i++){
        sum = sum+ ar1[i];
    }
    return sum/n;
}

let ar1 =[1, 3, 9, 15, 90];
let avg= AverageArray(ar1);

console.log(`Average: ${avg}`);