function receiveMassege(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(ogolaansho = true){
                resolve("Waa laguu gudbiyay codsigagi,soo dhawoow")
            }else{
                reject("lagaama aqbalin codsigaagi,try it again ")
            }
        }, 2000);
    })
}


async function displayUserData() {
    try{
        const massege = await receiveMassege()
        console.log(massege)
    }catch(error){
        console.log(error)
    }
}

displayUserData();