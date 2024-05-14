// //higher order loops 

// //array specific loops 

// const arr = [1,2,3,4,5]

// //forof
// for (const val of arr) {
//     console.log(val);
// }

// const greetings ="helloWorld";
// for(greet of greetings)
//     {
//         console.log(greet);
//     }

//Maps
const map = new Map()//map has only unique values 
//no duplicate entries allowed 
map.set('IN','India')
map.set('USA','United States Of America')
map.set('CND' , 'Canada')

// console.log(map);

//for of can be used to iterate over the map
for (const [key , value] of map) {
    console.log(key , value)
    
}

const games ={
    game1 : "COD",
    game2 : "GTA"
}

for (const [key,value] of games) {
    console.log(key , value);
}

//not working for objects 