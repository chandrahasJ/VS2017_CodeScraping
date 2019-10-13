{
    let demoDiv = document.getElementById("demoDiv");
    let divMessage: any = "Start Message";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Arrays ----------------------------------  <br> ";
    let lst_1: number[] = [1, 2, 5, 6, 41];
    for (let num of lst_1)
        divMessage += " <br> " + num + "";

    demoDiv.innerHTML = " <br> " + divMessage + " <br>";;

    divMessage += " <br> ---------------------------------- Arrays String ----------------------------------  <br>";

    let lstString_1: string[] = ["A", "B", "CJ"];
    for (let str of lstString_1)
        divMessage += " <br> " + str + "";

    demoDiv.innerHTML = " <br> " + divMessage + " <br>";


    divMessage += " <br> ---------------------------------- Generic Arrays ----------------------------------  <br>";
    let lst: Array<number> = [1, 2, 3, 4, 5];
    for (let num of lst_1)
        divMessage += " <br> " + num + " ";

    demoDiv.innerHTML = " <br> " + divMessage + " <br>";

    divMessage += " <br> ---------------------------------- Arrays String ----------------------------------  <br>";

    let lstString_2: string[] = ["A", "B", "CJ"];
    for (let str of lstString_2)
        divMessage += " <br> " + str + " ";

    demoDiv.innerHTML = " <br> " + divMessage + " ";


    divMessage += " <br> ---------------------------------- ReadOnly Array ----------------------------------  <br>";
    let lstReadonlyArray: ReadonlyArray<string> = [
        "This", "Array", "is", "Readonly", "Array", "We", "Cannot", "Add", "Edit", "This", "Array",
        "Once", "it", "is", "initialized"
    ];

    //lstReadonlyArray[0] = 12; // error! 
    //lstReadonlyArray.push(5); // error! 
    //lstReadonlyArray.length = 100; // error! 
    //lstReadonlyArray = lst_1; // error! 

    divMessage += " <br> lstReadonlyArray[0] = 'Error' ---> Error  <br>";
    divMessage += " <br> lstReadonlyArray.push('Error 1') ---> Error  <br>";
    divMessage += " <br> lstReadonlyArray.length = 100 ---> Error  <br>";
    divMessage += " <br> lstReadonlyArray =  lst_1 ---> Error  <br>";


    for (let str of lstReadonlyArray)
        divMessage += "" + str + " ";

    demoDiv.innerHTML = " <br> " + divMessage + " <br>";
}







