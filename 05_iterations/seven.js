//reduce js mdn

const myNums = [1,2,3]

const myTotal = myNums.reduce(
    (acc,curval)=>
        {
            console.log(acc)
            return acc+curval
        },0)

console.log(myTotal)
