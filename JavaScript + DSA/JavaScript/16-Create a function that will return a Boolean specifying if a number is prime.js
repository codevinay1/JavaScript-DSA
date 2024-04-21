console.log("Create a function that will return a Boolean specifying if a number is prime");
function isPrime(n){
    if( n< 2)
    return false;

    if(n == 2)
    return true;

    let maxDiv = Math.sqrt(n);

    for(var i = 2; i<= maxDiv; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

console.log(2, "is prime? ", isPrime(2));
console.log(3, "is prime? ", isPrime(3));
console.log(4, "is prime? ", isPrime(4));
console.log(5, "is prime? ", isPrime(5));
console.log(9, "is prime? ", isPrime(9));