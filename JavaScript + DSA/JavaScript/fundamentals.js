

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