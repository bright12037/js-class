const totalScore = 150
// const firstExam = 30
// const secondExam = 20
// const thirdExam = 50

const firstExam = Number(prompt('Enter first score'))
const secondExam = Number(prompt('Enter second score'))
const thirdExam = Number(prompt('Enter third score'))

const userScore  = firstExam + secondExam + thirdExam

if(userScore <=50){
    console.log(`user Score is ${userScore} and you failed`)
}

else if(userScore > 50 && userScore <= 100){
    console.log(`user Score is : ${userScore} and you passed`)
}

else if(userScore > 100){
    console.log(` user Score is: ${userScore} Excellent`)
}