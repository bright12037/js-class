const mydetails = (fname, lName, age) =>{
    return [fname, lName, age]
}

const myNewdetails=mydetails(prompt("enter first name"),
                            prompt("enter second name"),
                            prompt("enter age"));

const processDetails = (message1, message2, message3) => {
    return `${message1} ${myNewdetails[0]} ${myNewdetails[1]} ${message2} ${myNewdetails[2]} ${message3}`
};
console.log(processDetails('my name is : ', 'i am ', 'years old'));