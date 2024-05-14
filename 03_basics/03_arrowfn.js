const ans = (val1 , val2) => {
    return val1+val2;
}

let result = ans(3,2);

console.log(result);

const ans1 = (val1 , val2) => val1+val2;//single statement 


let result1 = ans1(4,2);

console.log(result1);


const ans2 = (val1 , val2) => (val1+val2);//in curly multiple statements no need of the return keyword


let result2 = ans2(4,2);

console.log(result2);

