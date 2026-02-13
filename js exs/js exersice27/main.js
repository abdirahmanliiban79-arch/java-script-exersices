function receiveMassege(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(ogolaansho = false){
                resolve("Waa laguu gudbiyay codsigagi,soo dhawoow")
            }else{
                reject("lagaama aqbalin codsigaagi,try it again ")
            }
        }, 2000);
    })
}
receiveMassege()
.then((aqbalay)=>{console.log("jawaab=",aqbalay)})
.catch((cilad)=>{console.log(cilad)})