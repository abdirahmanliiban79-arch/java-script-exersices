changeImage = function(){

    const image = document.querySelector('#image')
    const url = prompt("please enter your image url")
    const borderColor = prompt("please enter your image borderColor (in pixels)")
    const width = prompt("please enter your image width (in pixels)")
    const height = prompt("please enter your image height (in pixels)")
    const padding = prompt("please enter your image padding (in pixels)")
    const borderRadius = prompt("please enter your image borderRadius (in pixels)")
             
    image.setAttribute('src',url)
    image.style.border = `1.5px solid ${borderColor}`
    image.style.width = `${width}px`
    image.style.height = `${height}px`
    image.style.padding = `${padding}px`
    image.style.borderRadius = `${borderRadius}px`

}