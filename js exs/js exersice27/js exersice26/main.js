// non blocking
function getInfo(callback){
    setTimeout(() => {
        return  info = ("Time is up"),
        callback(info)
    },2000);
}

console.log("waqtigu wuu dhacayaa after 2 second")

getInfo (function(info){
    console.log(info)
})


// blocking


function getDataSyn(){
    alert("you must click OK to get what you were looking it")
        return ("this data is yours")
 
}

const data = getDataSyn();
console.log(data);
