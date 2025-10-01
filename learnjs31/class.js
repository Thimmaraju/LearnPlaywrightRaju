

// function add(num1, num2){

const { constants } = require("buffer")

//     console.log(num1+num2)
// }

// function substract(num1, num2){

//     console.log(num1-num2)
// }

// function multiply(num1, num2){

//     console.log(num1*num2)
// }


// function devision(num1, num2){

//     console.log(num1/num2)
// }

// add(4,8)

// class is pyshical entity 

// class will have variables and methods 

// class classname{

//     studename  = "dmfh"
//     sttrainer = "erkwjnfj"

//     m1(){


//     }

//     m2(){


//     }

// }

class Calculator {

    stname = "Navya"
    sttrainer = "Bharath"

    printMessage(){

        console.log("Hi this is a simple Method")
    }
    constructor(num1, num2) {

        console.log(num1 + num2)
    }

    substract(num1, num2) {

        console.log(num1 - num2)
    }

    multiply(num1, num2) {

        console.log(num1 * num2)
    }


    devision(num1, num2) {

        console.log(num1 / num2)
    }

    greetMessage(num1, num2){

        console.log("Hey Hi " + this.stname) 

        this.add(num1, num2)
    }

    raju(num1, num2){

        
        this.multiply(num1, num2)


    }

}

//creat Object / Instance of the class

const cal1 = new Calculator(5,9)

//cal1.add(4,8)
// console.log(cal1.stname) // Navya

// cal1.greetMessage(5,9)

const cal2 = new Calculator(7,3)

// cal2.multiply(4,8)

// console.log(cal2.stname) 

//cal2.raju(5,8)


