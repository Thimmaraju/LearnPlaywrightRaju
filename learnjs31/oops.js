// class employee{

//    static empname = "Sumanth" // Stattic variables

//    Empplace = "Bangalore"    // non Static variables 

//   static m1(){

//        console.log("This is M1 Static Method")
//    }

//     m2(){

//        console.log("This is M2 Method")
//    }


//  static   m3(){

//        console.log("This is M3 static Method")

//        this.m1()
//    }

   
//     m4(){

//        console.log("This is M4 Method")
//    }
   

// }

// const emp1 = new employee()


// console.log(employee.empname)

// employee.m3()

// //========================================================================================
// // OOPS 

// // 1. Encapsulation 

// // 2. Inheritance 

// // 3. Polymorphism 
      
// //        Method Overring 
// //        Method Overaloading
       
// // 4. Prototype 


// // 1. Encapsulation 


// class student {


//       studentdeatiails(name, place , course ){

//          this.stuname = name
//          this.stuplace = place
//          this.stucourse = course

//       }

//       printstudetails(){

//           console.log(this.stuname)

//           console.log(this.stuplace)

//           console.log(this.stucourse)
//       }




// }

// const st1 = new student()

// st1.studentdeatiails("Bharath", "blr", "Playwright")  // setter 
 
// st1.printstudetails()  //getter 



// 2. Inheritance 

// class A{

//     m1(){

//         console.log("This is M1 Method ")
//     }

//     m2(){

//         console.log("This is M2 Method ")
//     }
    

// }



// class B extends A{

//     m3(){

//         console.log("This is M3 Method ")
//     }

//     m4(){

//         console.log("This is M4 Method ")
//     }
    

// }


// class C extends A{

//     m5(){

//         console.log("This is M5 Method ")
//     }

//     m6(){

//         console.log("This is M6 Method ")
//     }
    

// }


// const obj = new C()

// obj.m2()   // A 

// //obj.m4()   // B 

// obj.m6()  //C



// 3. Polymorphism


// class A {

//     add(num1, num2){

//         console.log(num1)

//          console.log(num2)

//          console.log(num1 + num2)
//     }
  
//     displaymessage(){
	  
// 	  console.log("This is Parent class method")
// 	}
  
// }

// class B extends A {
  
//     displaymessage(){
	  
// 	  console.log("This is Child class method")
// 	}

    
//     add(num1, num2, num3){

//         console.log(num1)

//          console.log(num2)

//         console.log(num3)

//          console.log(num1 + num2 + num3)
//     }
  
  
// }

// const obj1 = new A()

// // obj1.displaymessage()  // Method Overrding 

// // obj1.add(4,5) // methodooverring 


//  obj1.displaymessage() 

//  obj1.add(4,5,6)  //Method overLoading 


// 4. protoTypiong 


class A{

    stname = "Raju"

    m1(){

        console.log("This is M1 Method ")
    }

    m2(){

        console.log("This is M2 Method ")
    }
    

}

A.prototype.stname2 = "Ashok"   // Prototyped Variable  

A.prototype.m4 = function (){

      console.log("This is M4 Method ")  // Prototyped method
}


A.prototype.m3 = function (){

      console.log("This is M# Method ")  // Prototyped method
}

const ob1 = new A()

console.log(ob1.stname)

console.log(ob1.stname2)

ob1.m1()

ob1.m3()

const ob2 = new A()
console.log(ob2.stname)

console.log(ob2.stname2)

ob2.m1()

ob2.m3()




const ob3 = new A()

console.log(ob3.stname)

console.log(ob3.stname2)

ob3.m1()

ob3.m3()



// callbacks 

// promises 

// async await 

// file1 

// class A{


// }

// export

// file2
// import
// obj


// file3

// import
// obj
