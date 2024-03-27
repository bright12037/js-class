// const Num1 = Number(prompt('enter number'))
// const sign = prompt('enter operation')
// const Num2 = Number(prompt('enter number'))

// if( sign === '+'){
//     console.log(Num1+Num2)
// }
// else if( sign === '-'){
//     console.log(Num1-Num2)
// }
// else if( sign === '*'){
//     console.log(Num1*Num2)
// }
// else if( sign === '/'){
//     console.log(Num1/Num2)
// }
// else{
//     console.log("invalid input")
// }

const Num1 = Number(prompt('enter number'))
const Num2 = Number(prompt('enter number'))

switch (prompt('enter sign')){

    case'-':
        alert(`thi is your result ${Num1-Num2}`)
        break;

    case '+':
        alert(2+1)
        break;
    
    case '/':
        alert(2/1)
        break;

    default:
        alert(2)
}