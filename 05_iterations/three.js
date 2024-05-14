const myObject = {
    js : "javascript",
    rb : "ruby",
    cpp : "c++"
}

//looping on objects with the help of for in loop

for (const key in myObject) {
    console.log(key , myObject[key]);
}

const arr = ["a",2,3,4,5]

for (const key in arr) {
    console.log(arr[key]);
    
}