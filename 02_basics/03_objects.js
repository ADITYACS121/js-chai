
const symb = Symbol("key1");
const obj1 = {
    name :"aditya",
    age : 10,
    location:"una",
    1 :115,
    "country":"india",//seekhne ka point 2 .notation not applicable
    [symb] : "abc@0101",//seekhne ka point 1
    email:"adityabharti0202@google.com",
    isLoggedIn:true
}

console.log(obj1.name);

console.log(obj1["location"])

console.log(typeof obj1[1])

console.log(obj1["country"])

console.log(typeof obj1[symb])

obj1.age = 62

console.log(obj1);

Object.freeze(obj1)

// obj1.country = "australia"

console.log(obj1);