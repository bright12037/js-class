const Message = (welcomemsg, username) => {
    const result=  `${welcomemsg} ${username}`;
    return result;
}
console.log(Message(prompt("Enter welcome message"),
prompt("enter username")))