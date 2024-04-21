
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