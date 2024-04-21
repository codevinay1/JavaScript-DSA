console.log("Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers");
function positiveArray(ar2){
 let ar3 = [];
 for(let i = 0; i<ar2.length; i++)
 {
    let el = ar2[i];
    if(el>=0)
    {
        ar3.push(el);
    }
 }
 return ar3;
}

let ar2=[-5, 10, -3, 12, -9, 5, 90, 0, 1];
let ar3 = positiveArray(ar2)

console.log(ar3);