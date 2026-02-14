// spread oprator
const Num = [1,2,3]
const allNum = [...Num,4,5,6,7];
console.log(allNum)

// rest parameter

function multiply(...numbers){
    return numbers.reduce((total,sum)=> total * sum,)
} 
console.log(multiply(20,2,5));