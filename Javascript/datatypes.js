// var a;
// a=5; 
// var b=6;  
//    //integer / number

// var firstName;
//  firstName="Sanket";
//  //calc();


// //  hoisting

//  variable declaration are always hoisted at the top i.e even if we declare the 
// variable at last line after executing the statements the variable will still be declared by default at the top.  
// And only declarations are hoisted at top. Not definition of variable.

//  function calc(){
     
//     //  c=a+b;
//     c=4;
//      console.log(c + a+ firstName);
//      var c;  

 

     

//  }


//  if(a<b){
//     let c;
//     var d;
//     c=a+b;
//     d=b-a;


//  }

//  function add(){
//     let add= a+b;
//     document.write(add);
//  }

// //  document.write("a is less than b"+ c);

// //document.write("a is less than b"+ c);
// //document.write("a is less than b \n"+ b);
// add();


 
 





// document.write(a);
// console.log(a);
// console.log(firstName)


var a,b;
a=5;
b=10;

const PI=3.14;

// addition();

document.write(addition());

area();

function addition() {

   
   // hoisting always happens for variable declarations
   // variable definitions are not hoisted at top. 
// //In javascript when we run code The variables are allocated memory
// var keyword variables are allocated memory in global object memory
// But for let keyword variable the memory is allocated in defferent space. 
// The time period from allocating the memory to calling or using the variable is called a temporal deadzone.


   if(a<b) {
      
      
      let add;
      add=a+b;
      document.write(add);
   
      
   }
   
  
   
}


function area(){
   let area = PI*a;
   console.log(area);
   document.write(area);
}





var num;
num=39;
num=3.14


// Javascript Datatypes
// Primitive and Non Primitive Datatypes

// Primitive Datatypes specifies the size and types of the varible and variable values.
// Non Primitive Datatypes are reference type datataype. they refer to objects.


// Primitive Datatypes
// Number String BigInteger Null Boolean undefined

// Non Primitive Datatype
// Array 
// Objects
// Function

let names =["Sanket", "Swati", "Omkar", "Rushi", "Siddhi"]

document.writeln("\n" + names[3]);


// Boolean datatype is datatype which has only two values. Either True or False 

// let passwordMatched = "codekul";

// var password = prompt("Enter the Password");



// if (passwordMatched == password){
//    console.log("Password is matched")
// }
// else {
//    console.log("Password not matched.")
// }

// //console.log(passwordMatched);


let num1=5, num2=6;


if (num1>num2){
   console.log("a<b" + num1>num2);
}
else {
   console.log("a<b" + num1<num2);
}



