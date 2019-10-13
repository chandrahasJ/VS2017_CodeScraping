function HelloArg(firstName : string, lastName : string) {
    var message: string = "Hello "
    message += firstName + " " + lastName;
    return message;
}

alert(HelloArg("Chandrika", "Poojari"));