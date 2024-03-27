// i go to an airport i was ask for my name and my passcode

// if the passcode length is > 6 or less 4 that means passcode is not correct
// and u will not be permitted to join the flight

// if the passcode length is less than or  equal to 6 or greater than or equal 4 that means
// your passcode is correct and u will be permitted to join the flight

// const user = "bright"
// console.log(user.length)

const userName = prompt('Enter your name:  ')
const userPasscode = prompt('Enter your passcode')
if (userPasscode.length > 6 || userPasscode.length < 4){
    console.log(`${userName} you are not permitted to join this flight`)
}
else if (userPasscode.length <= 6 || userPasscode.length >= 4){
    console.log(`Welcome ${userName} you are permitted to join this flight`)
}