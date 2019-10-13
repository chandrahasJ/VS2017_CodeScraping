{
    let demoDiv = document.getElementById("demoDiv");
    let divMessage: any = "Start Message";
    demoDiv.innerHTML = divMessage;

    //Basic Data Type = string, number , boolean
    //Number.........
    let myNumber: number = 10;
    divMessage += "\n ---------------------------------- Number ----------------------------------";
    divMessage += "\n Integer " + (myNumber) + "\n";
    myNumber = 10.01;
    divMessage += "\n Float/Decimal " + (myNumber) + "\n";
    demoDiv.innerText = divMessage;

    //String/........
    divMessage += "\n ---------------------------------- String ----------------------------------";
    let myString_1: string = "ABCD";
    let myString_2: string = 'CJ Poojari';

    let myString_3: string = `Hi ${myString_2}. Bro how are you ??`;
    let myString_4: string = `
                            This is Line 1.......
                            This is Line 2.......
                            This is Line 3.......
                        `;
    let myString_5: string = "\
                          \n This is Line 1 ....................\
                          \n This is Line 2 ....................\
                          \n This is Line 3 ....................\
                          \n This is Line 4 ....................\
                          "

    divMessage += "\n" + (myString_1) + "\n";
    divMessage += "\n" + (myString_2) + "\n";
    divMessage += "\n ---------------------------------- Templated String ----------------------------------";
    divMessage += "\n" + (myString_3) + "\n";
    divMessage += "\n" + (myString_4) + "\n";
    divMessage += "\n" + (myString_5) + "\n";

    demoDiv.innerText = divMessage;

    //Boolean/........
    divMessage += "\n ---------------------------------- Boolean ----------------------------------";
    let myBoolean: boolean = true;
    let myBoolean_1: boolean = false;

    divMessage += "\n" + (myBoolean) + "\n";
    divMessage += "\n" + (myBoolean_1) + "\n";
    divMessage += "\n Assigning Zero & One will cause Errors\n";
    demoDiv.innerText = divMessage;
}