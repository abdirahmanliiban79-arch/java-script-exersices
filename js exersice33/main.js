const greet = document.querySelector('#greet')
console.log(greet)
const news = document.querySelector('.news')

function changeContent(){
    greet.textContent = "Hey Welcome guest"
}

function changeElement(){
    news.innerHTML = ` <h2>Ramadan kareem</h2>`
}