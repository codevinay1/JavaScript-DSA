

console.log("Print numbers from 1 to 10");

for(let i = 1; i<11; i++){
    console.log(i);
}

console.log("Print the odd numbers less than 100");

for(let i = 1; i<100; i++){
    if(i%2!=0) {
        console.log(i);
    }
}

console.log("Print the multiplication table with 7");
for(let i = 1; i<11; i++){
    console.log(` 7 X ${i} = ${7*i}`);
}

console.log("Print all the multiplication tables with numbers from 1 to 10");
for(let i = 1; i<11; i++){
    for(let j = 1; j<11; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
    console.log("\n");
}

console.log("Calculate the sum of numbers from 1 to 10");
let x = 0
for(let i=1; i <=10; i++){
    x= x+i;
}
console.log(x);

console.log("Calculate 10!");
console.log(" n! = 1*2*3*4.....*n ")
let y = 1
for(let i=1; i<=10; i++){
    y = y*i;
}{
    console.log(y);
}

console.log("Calculate the sum of even numbers greater than 10 and less than 30");
let z = 0;
for(i=10; i<= 30; i++){
    if(i%2==0){
     z = z+i;
    }
}
console.log(z);

console.log("Create a function that will convert from Celsius to Fahrenheit");
console.log("C = F - 32/1.8");  
// function cToF(c){
// return c* 1.8 + 32;
// }

 const cToF = (c) =>  c*1.8 +32;
console.log(cToF(36));

console.log("Create a function that will convert from Fahrenheit to Celsius");
const fToC = (f) => (f - 32)/1.8;
console.log(fToC(96.8));


console.log("Calculate the sum of numbers in an array of numbers.");
console.log("Example array:[2, 3, -1, 5, 7, 9, 10, 15, 95]");
console.log("Expected output:145");

function sumArray(ar)
{
let sum = 0;
for(i=0; i<ar.length; i++){
sum = sum+ar[i];
}
return sum;

}


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


console.log("Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers");

