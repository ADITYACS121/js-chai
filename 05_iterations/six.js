const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num)=> num+10)//returns a value

const newNums = myNums.map((num)=>num*10).map((val)=>val+1).filter((nums)=>(nums>40))

console.log(newNums)