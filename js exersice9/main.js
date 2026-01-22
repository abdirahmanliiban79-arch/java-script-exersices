let car = {
    model : "juniper-model y", 
    price : "$41630",
    year : 2020,
    start : function (){
        console.log("this car has started on "
        +this.year
        )
    }
}
console.log(car.start())
console.log("TESLA CAR INFO")

console.log(car.model)
console.log(car.price)
console.log(car.year)