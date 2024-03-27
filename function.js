// fucnction are block of codes that perform a specific task, it starts with the word fuction with ()
    // // function (x,y){
    //     logic
    // }
// we have other fuctions like console.log(), slice(), substring(),pop() etc

// we can create our own fuction for example and we have two types

// #1 =================js native function=============================== not so used
function addition(){
    console.log(2+2)
}
//native function call
addition()

// #2===================js arror function=====================

const addition2 = () => {
    console.log(2+6)
}
// arror function call
addition2()



// Parameters and arguments
// parameters are instant variables you declare when you want create your function
// arguments are values you asssign to parameters

// native function with parameters
function additionx(num1,num2){
    console.log(num1+num2)
}
additionx(20,21)

// it can be used for arror funcion 
const addition2x = (num1,num2) => {
    console.log(num1+num2)
}
// arror function call
addition2x(13,2)


// to Return
function additions(num1,num2){
    const result = num1+num2;
    return result;
}
console.log(additions(20,21))


// sample
function add(num1,num2,num3){
    const resulte=num1+num2+num3;
    return resulte;
}
console.log(add(Number(prompt("Enter number")),
                Number(prompt("enter number")),
                Number(prompt("enter number"))
))

