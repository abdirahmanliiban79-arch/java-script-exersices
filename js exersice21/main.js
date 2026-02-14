const number = [1,2,3,4,5]
const multiply = number.reduce((Total,num)=> Total * num,1)
console.log(multiply)

let score = [10,20,30,40,50,60,70,80,90,100]
const passed = score.filter((students)=> students >=50)
console.log(passed + "paased")