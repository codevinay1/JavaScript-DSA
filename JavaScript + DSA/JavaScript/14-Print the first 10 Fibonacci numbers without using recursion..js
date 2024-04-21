console.log("Print the first 10 Fibonacci numbers without using recursion.");
console.log("f(0) = 0\nf(1) = 1\nf()n = f(n-1) + f(n-2)");

var f0 = 0;
console.log(f0);

var f1 = 1;
console.log(f1);

for(i = 2; i < 10; i++ ){
let fi = f1+ f0;
console.log(fi);

f0 = f1;
f1 = fi;
}
