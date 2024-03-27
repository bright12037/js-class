// const details = [ 'bright',12, 'male', 'am a pogrammer', false, [1,2,3,4, ['jude', [3,4,5,6], "female"]]
// ]
// details[3]
// console.log(details[5][4][2][3])

const myDEtails = ['class one', [ 'no of students is : ', [1,2,3]], 'class two',

                ['10', 'my is positive :', false, true], 'class three', ['and is ', 'my negative : ', false, true]
            
                ]
const numOne = myDEtails[1][0]
const numTwo = myDEtails[3][0]
const numThree = myDEtails[3][1]
const numFour = numThree.substring(3)
const numFive = myDEtails[3][3]
const numSix = myDEtails[5][0]
const numSeven = myDEtails[5][1]
const numEight = numSeven.substring(3)
const numNine = myDEtails[5][2]
// console.log(numOne + numTwo)
// console.log(numFour + numFive)
// console.log(numSix + numEight + numNine )

console.log(myDEtails[1][0] + myDEtails[3][0])
console.log(myDEtails[3][1].substring(3) + ' ' + myDEtails[3][3])
console.log(myDEtails[5][0] + myDEtails[5][1].substring(3) + myDEtails[5][2] )

let num = [1,2,3,4]
console.log(num.pop())
num.push(6)
console.log(num)
