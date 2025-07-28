// const myArray=[1,2,3,4,5];
// console.log(myArray);

// const myArray1=[1,2,3,true,"prasanta"];
// console.log(myArray1);

// const myArray2=new Array(1,2,3,4,5,6,7,8,9)
// console.log(myArray2);

//----------------Array Methods-----------------------------
const myArray=[1,2,3,4,5];
console.log(myArray);

myArray.push(6)
console.log(myArray);

myArray.pop();
console.log(myArray)

myArray.unshift(9);
console.log(myArray);

myArray.shift();
console.log(myArray);


console.log(myArray.includes(8));//gives result as true and false
console.log(myArray.indexOf(8));//index of the element which is present or not

const newArr=myArray.join();
console.log(newArr)

myArray.unshift(0)
console.log("A",myArray)

const myn1=myArray.slice(1,3);
console.log("B",myArray)

const myn2=myArray.splice(1,3);
console.log("C",myArray)


