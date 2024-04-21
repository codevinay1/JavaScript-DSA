console.log("Create a function that will find the nth Fibonacci number using recursion");
console.log("f(0)=0\nf(1)=1\nf(n)=f(n-1) + f(n-2)");

function findFibonacci(n){
    if(n == 0)
    return 0;

    if(n == 1)
    return 1;

    return findFibonacci(n-1) + findFibonacci(n-2);
}
    let n = findFibonacci(10);
    console.log(n)
