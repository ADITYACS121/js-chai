const coding = ["js", "ruby" , "java","python", "cpp"]

const values = coding.forEach((item)=>{
    console.log(item)
})

console.log(values)

//FOREACH DOES NOT RETURN ANYTHING 

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newnums = myNums.filter((num)=>num>5)//it returns values 

// using foreach 

//define an array 
const vals =[1,2,3,4,5]
const newval=[]

vals.forEach((val)=>{if(val<4){
    newval.push(val)
}})

console.log(newval)