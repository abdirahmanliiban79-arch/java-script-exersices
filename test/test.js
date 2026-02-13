


// const country = ["kenya","somalia","uganda","ethiopia"]
// country.forEach( (wadamo) => {
//     console.log("i've visted "+wadamo)
// });

// for(key of country){
//     console.log("i've visited "+key)
// }

// const numbers = ["hamuuda","leyla","qaali"]
// let newNumbers = numbers.map((number)=> number.length)

// console.log(newNumbers)

// let members = ["yuusuf","ahmed","suheyra","habiibo"]
// for(i=0; i<=members.length; i++){
//     console.log(members[i])
// }

// const scores = [10,20,30,40,50,60,70,80,90,100]

// let passed = scores.filter((scores)=> scores >= 50)
// console.log(passed)

// {
// let name = "abdirahman"
// let city = "mogadishu"

// const massege = `hello my name is ${name} and i live in ${city}`;
// console.log(massege)
// }

// const fruits = ["banana","apple","jerry"]
// let [,apple,jerry]= fruits ;
// console.log(apple,jerry)

// const info = {name : "abdirahman", age : 24, city : "mogadishu"}
// const {name,age,city} = info;
// console.log("his name is:",name,"he is: ",age,"years old","and live in: ",city)

// function greet(name = "guest"){
//     console.log(`hello ${name}`)
// }
// greet("abdirahman")
// greet("hamuuda")
// greet(c
// calculateArea = function (width,height = width){
//    return `${width},${height}`
// } 
// console.log(calculateArea(5,7))
// console.log(calculateArea(3))

// // spread oprator
// let num = [1,2,3]
// const allNum = [...num,5,6,7,8,9]
// console.log(allNum)

// // rest oprator
// function Colors(...Colors){
//     return Colors.reduce((total,sum)=> total * sum,)
// }
// console.log(Colors(20,10,20,50))

// function fetchUserDataSyn(){
//     alert("fetching user data")
//     return  {id : "BA2",name : "mohamed",}
// }

// console.log("user data is in peocess please wait")

// let user = fetchUserDataSyn();

// console.log(user)
// console.log("user data is fetched")

// function getUserData(callback){
//     setTimeout(() => {
//       return user = {id : "bc4", name : "ahmed"},
//       callback(user)
//     },1000);
// }
// console.log("come up rapidly")

// getUserData (function(user){
//     console.log(user)

// })

// console.log("also you show up immidietly")

// function getInfo(callback){
//     setTimeout(() => {
//         return info = ("Waqtiga wuu dhacy"),
//         callback(info)
//     },5000);
// }
// console.log("waqtiga wuu dhici rabaa after 5 second ee hala kala xaroodo ardayey")

// getInfo((info)=>{
//     console.log(info)

// })


function fetchUserData (){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            // const success = true;
            if(success=false){
                resolve({id : "bc1", name : "hamuuda"})
            }else{
                reject("failed to fetch user data")
            }
        }, 2000);

    })
}
fetchUserData()
.then((data)=>{console.log("user data",data)})
.catch((err)=>{console.log(err)})