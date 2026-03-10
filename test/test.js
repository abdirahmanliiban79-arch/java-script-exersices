


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


// function fetchUserData (){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             // const success = true;
//             if(success=false){
//                 resolve({id : "bc1", name : "hamuuda"})
//             }else{
//                 reject("failed to fetch user data")
//             }
//         }, 2000);

//     })
// }

// async function displayUserData(){

//    try{
//      let user = await fetchUserData();
//     console.log(user)
//    }catch(error){
//     console.log(error)
//    }
// }
// displayUserData()


// // from object to json

// let info = {
//     name : "abdirahman",
//     id : "BC5",
//     location : "mogadishu"
// }
// console.log("from object to json")
// let jsonString = JSON.stringify(info)
// console.log(jsonString)

// // from json to object
// console.log("from json to object")
// const parsedData = JSON.parse(jsonString)
// console.log(parsedData)


// function greet(guest){
//     console.log("hello ",guest)
// } 

// function putUserName(callback){
//     const guest = prompt("enter your name")
//     callback(guest)
// }
// putUserName(greet)
// putUserName(greet)


// function proccessor(a,b, callback){
//     return callback(a,b)
// }

// add = (a,b) =>{
//     return a + b
// }
// multiply = (a,b) =>{
//     return a * b
// }
// divide = (a,b)=>{
//     return a / b
// }
// subtruction = (a,b)=>{
//     return a - b
// }

// console.log(proccessor(20,4,multiply))


// const fruits = ["apple","banna","cherry"]
// fruits.forEach((fruits)=>{
//     console.log("i like",fruits)
// })

// const numbers = [1,2,3,4,5]
// let multiply = numbers.map((number)=> number * 2)
// console.log(multiply )

// let key
// do{
//    key = prompt("enter a number that greater then 10")

// }while(key <!"10")
//     console.log("welcome lagend")

// async function fetchData() {

//    try {
//       console.log("starting fetching data")
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
//       if (!response.ok) {
//          throw new error(`failed to fetch data satatus ${response.status}`)
//       }
//       const data = await response.json();
//       console.log(data)
//    } catch (err) {
//       console.log(err)
//    }
// }
// fetchData()

// async function postData() {
//    try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
//          method: 'POST',
//          headers: {
//             'Content-type': 'application/json',
//          },
//          body: JSON.stringify({
//             title: 'News paper',
//             body: 'here we have a test paper',
//             userId: 1,
//          }),

//       });

//       console.log("before json", response)

//       if (!response.ok) {
//          throw new error(`failed to post ${response.status}`)
//       }

//       const data = await response.json();
//       console.log("after json", data)


//    } catch (error) {
//       console.log(error)
//    }
// }
// postData()


// const greet = document.getElementById('greet');
// console.log(greet)

// const text = document.getElementsByClassName('text')[1];
// console.log(text)

// const buttons = document.getElementsByTagName('button')[0];
// console.log(buttons)

// const list = document.querySelector('#list')

// function addNewItem(){

//     let newElement = document.createElement('li')

//     newElement.textContent = "item"
//     list.appendChild(newElement)

//     const newLetter = document.createElement('div')
//     newLetter.textContent = "waa maqaal tijaabo ah";
//     list.appendChild(newLetter)
// }

// const remove = document.getElementsByTagName('div')

// function removeItem(){


//     list.removeChild (list.lastChild,"maqaalkani wa latiry")
    
    
// }


// function changeImage(){
//     const image = document.querySelector('#image')
//     const url = prompt("please enter your image url")
    
//     image.setAttribute('src',url)
//     const borderColor = prompt("please enter your borderColor image (in pixels)")
//     const Width = prompt("please enter your image width (in pixels)")
//     const height = prompt("please enter your image height(in pixels)")
//     const padding = prompt("please enter your image padding(in pixels)")
//     const borderRadius = prompt("please enter your image borderRadius(in pixels)")

//     image.style.border = `1px solid ${borderColor}`
//     image.style.Width = `${Width}px`
//     image.style.height = `${height}px`
//     image.style.padding = `20px${padding}`
//     image.style.borderRadius = `20${borderRadius}px`
   

// }

// function changeImage() {
//     const image = document.querySelector('#image');

//     const url = prompt("Please enter your image URL:");
//     const borderColor = prompt("Please enter your desired border color:");
//     const width = prompt("Please enter the width of the image (in pixels):");
//     const height = prompt("Please enter the height of the image (in pixels):");
//     const borderRadius = prompt("Please enter the border radius (in pixels):");

//     image.setAttribute('src', url);
//     image.style.border = `2px solid ${borderColor}`;
//     image.style.width = `${width}px`;
//     image.style.height = `${height}px`;
//     image.style.borderRadius = `${borderRadius}px`;
//     image.style.padding = "10px";
//     image.style.backgroundColor = '#cfc2dc';
// }


// setDarkMode = function(){



//     document.body.style.backgroundColor = 'black'
//     document.body.style.color = 'white'

// }

// setLightMode = function(){
//     document.body.style.backgroundColor = 'white'
//     document.body.style.color = 'black'
// }

// const button = document.querySelector('#myBotton')
// const removeBottonn = document.querySelector('#removeBotton')


// function handleClick(){
//     console.log("hey welcome")
// }

// button.addEventListener('click', handleClick)

// removeBottonn.addEventListener('click', function(){
// button.removeEventListener('click', handleClick);
// console.log("removed the click button's action")
// })


// const color = document.querySelector('#Color')
// const selectedColor = document.querySelector('#selectedColor')


// color.addEventListener('change', function(){
//     console.log('changed', color.value);
//     selectedColor.textContent = `selected Color is:${color.value}`
// })

// const username = document.querySelector('#myForm')
// const currentName = document.querySelector('#currentName')


// username.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.log("form submited....")
//     currentName.textContent = "Form submission prevented"
// })


// username.addEventListener('change', function(){
//     console.log("current name is:",username.value)
//     currentName.textContent = `Your current name is ${username.value}`
// // })
// form.addEventListener('submit', function(event){

//     event.preventDefault();
    
    // const username = document.querySelector('#username').value;
    // const email = document.querySelector('#email').value;
    // const password = document.querySelector('#password').value;
    // const confirmPassword = document.querySelector('#confirmPassword').value;

    // const err = document.querySelector('#err');


//     if(username === ''){
//         err.textContent = "please enter your name first"
//         return
//     }

    // const emailpattern = /^[a-zA-Z0-9._%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if(!email.match(emailpattern)){
        // err.textContent = 'have a look on your current eamil'
//         return
//     }
   
//     if (password.length < 8){
//         err.textContent = "password must be at least 8 characters long"
//         return
//     }
//     if(password !== confirmPassword){
//         err.textContent = "make sure your password"
//         return
//     }



//     console.log( err.textContent = "registred successfully")

   
    

// })