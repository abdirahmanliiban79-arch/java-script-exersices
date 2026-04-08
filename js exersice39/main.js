const oldLanguages = document.querySelector('#Old-language');


const languages = ['somali','spanish','arabic','english','amharic','italian'];
languages.push('francis','chinese')


languages.forEach((language) => {
    const option = document.createElement('option');
    option.className = 'languages'
    

    option.value = '';
    option.innerHTML = language;
    oldLanguages.appendChild(option)



});


// const parentElement = document.querySelector('#New-language')
// let html = '';
// const languages = ['somali','kenya','amharic','arabic','english'];


// languages.forEach((languages)=>{
//     const option = document.createElement('option')

//     option.value = ''
//     option.textContent = languages;
//     parentElement.appendChild(option)
//     console.log('chose',languages)
    
    
// })
//     console.log('hi')