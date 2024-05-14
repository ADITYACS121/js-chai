// const tinderUser = {};

// tinderUser.id = "ab123"
// tinderUser.name = "sammy"
// tinderUser.isLoggedIn = false


// console.log(tinderUser);

// const regularUser ={
//     email :"someone@gmail.com",

//     name: {
//         userFullName:{
//             firstName :"aditya",
//             lastName :"bharti"
//         }
//     }
// }

// console.log(regularUser.name.userFullName.firstName);


// let objA = {1:"a" , 2:"b" , 3:"c"}
// let objB = {4:"d" , 5:"c"}
// let objC = {6:"d"}

// //Object.assign is used to concat the different objects 
// let res = Object.assign({} , objA , objB ,  objC);

// console.log(res)
// console.log(objA)

// const users =[
//     {
//         id :"1",
//         email :"abc@gmail.com"
//     },
//     {
//         id :"1",
//         email :"ab1@gmail.com"
//     },
//     {
//         id :"2",
//         email :"ab2@gmail.com"
//     },
//     {
//         id :"3",
//         email :"ab3@gmail.com"
//     }
// ]

// console.log(users[1].email);

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const course  = {
    Coursename: "js in hindi",
    price :"999",
    CourseInstructor :"hitesh"
}

// course.CourseInstructor 

// ye karne ke liye method 2

const {CourseInstructor : ins} = course;

// console.log(CourseInstructor)
console.log(ins)

