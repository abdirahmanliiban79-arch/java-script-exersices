const setMode = document.querySelector('.SetMode')

setMode.addEventListener('click',switchingMode)

function switchingMode(){


    document.body.classList.toggle('darkMode');
    setMode.classList.toggle('darkMode');

    if(document.body.classList.contains('darkMode')){
        setMode.textContent = 'lightMode'
        localStorage.setItem('mode','light')
    }else{
        setMode.textContent = 'darkMode'
        localStorage.setItem('mode','dark')
    }
}

window.addEventListener('DOMContentLoaded',function(){
    const saveMode = localStorage.getItem('mode')
    console.log(saveMode)
   if(saveMode === 'light'){
    document.body.classList.add('darkMode');
    setMode.classList.add('darkMode');
    setMode.textContent = 'lightMode';
   }else{
    setMode.textContent = 'darkMode'
   }
})
