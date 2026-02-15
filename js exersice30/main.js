proccessor = (a,b, callback) => {
    return callback(a,b)
}
add = (a,b) => {
    return a+b
}
subtruction = (a,b) => {
    return a-b
}
multiply = (a,b) => {
    return a*b
}
divide = (a,b)=>{
    return a/b
}

console.log(proccessor(30,10,add))
console.log(proccessor(30,10,subtruction))
console.log(proccessor(30,10,multiply))
console.log(proccessor(30,10,divide))