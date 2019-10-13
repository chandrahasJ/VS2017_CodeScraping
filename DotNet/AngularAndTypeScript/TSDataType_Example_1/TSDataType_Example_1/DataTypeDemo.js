{
    var demoDiv = document.getElementById("demoDiv");
    var divMessage = "Start Message";
    demoDiv.innerHTML = divMessage;
    //Basic Data Type = string, number , boolean
    //Number.........
    var myNumber = 10;
    divMessage += "\n ---------------------------------- Number ----------------------------------";
    divMessage += "\n Integer " + (myNumber) + "\n";
    myNumber = 10.01;
    divMessage += "\n Float/Decimal " + (myNumber) + "\n";
    demoDiv.innerText = divMessage;
    //String/........
    divMessage += "\n ---------------------------------- String ----------------------------------";
    var myString_1 = "ABCD";
    var myString_2 = 'CJ Poojari';
    var myString_3 = "Hi " + myString_2 + ". Bro how are you ??";
    var myString_4 = "\n                            This is Line 1.......\n                            This is Line 2.......\n                            This is Line 3.......\n                        ";
    var myString_5 = "\
                          \n This is Line 1 ....................\
                          \n This is Line 2 ....................\
                          \n This is Line 3 ....................\
                          \n This is Line 4 ....................\
                          ";
    divMessage += "\n" + (myString_1) + "\n";
    divMessage += "\n" + (myString_2) + "\n";
    divMessage += "\n ---------------------------------- Templated String ----------------------------------";
    divMessage += "\n" + (myString_3) + "\n";
    divMessage += "\n" + (myString_4) + "\n";
    divMessage += "\n" + (myString_5) + "\n";
    demoDiv.innerText = divMessage;
    //Boolean/........
    divMessage += "\n ---------------------------------- Boolean ----------------------------------";
    var myBoolean = true;
    var myBoolean_1 = false;
    divMessage += "\n" + (myBoolean) + "\n";
    divMessage += "\n" + (myBoolean_1) + "\n";
    divMessage += "\n Assigning Zero & One will cause Errors\n";
    demoDiv.innerText = divMessage;
}
//# sourceMappingURL=DataTypeDemo.js.map