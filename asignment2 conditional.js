const userName = prompt('Enter name')
const usergender = prompt('male or female')
const userAge = prompt('Enter age')

if(usergender === "male" && userAge < 18 && userAge < 40){
    console.log(`male Bounced out!!😠`)
}
else if(usergender === "female" && userAge < 17 && userAge <= 39){
    console.log(`female Bounced out!!😠`)
}
else{
    console.log(`welcome😊`)
}



// if (gender === 'male'){
//     if (age < 18 || age > 40){
//         console.log('get out for male😒')
//     }
//     else if(age >= 18 || age <=40){
//             console.log('welcome for male😊')
//     }
// }

// else if(gender==='female'){
//     if (age < 17 || age >39){
//         console.log('get out for female😒')
//     }
//     else if (age >= 17 || age <=39){
//         console.log('get out for female😒')
//     }
// }