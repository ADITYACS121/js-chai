//arrays 

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1,2,3,4,5);

console.log(myArr[1]);

console.log(myArr2.length);
console.log(myArr2.findIndex((number)=>number>10));

myArr2.push(6);
console.log(myArr2);

myArr2.unshift(15);//push in the start
console.log(myArr2);

myArr2.shift();//pop from the front
console.log(myArr2);

const arr = [1,2,3,4,5];
//slice does not change the original array 
console.log("A " , arr)

console.log(arr.slice(1,3));//1 to 2

console.log("After slice " ,arr);

//splice will return 1 to 3
console.log(arr.splice(1,3));//modifies the original array

console.log("After splice " ,arr);


