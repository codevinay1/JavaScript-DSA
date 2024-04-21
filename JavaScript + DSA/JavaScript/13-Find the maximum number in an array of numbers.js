console.log("Find the maximum number in an array of numbers");
function findMax(ar){
    var max = ar[0];
    for(let i = 0; i<ar.length; i++){
        if(ar[i]>max){
            max = ar[i];
        }
    }
    return max;
}

let ar =[-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max = findMax(ar);
console.log("max: ", max);