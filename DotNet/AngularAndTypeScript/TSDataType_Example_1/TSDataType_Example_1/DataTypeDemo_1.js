{
    var demoDiv = document.getElementById("demoDiv");
    var divMessage = "Start Message";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Arrays ----------------------------------  <br> ";
    var lst_1 = [1, 2, 5, 6, 41];
    for (var _i = 0, lst_1_1 = lst_1; _i < lst_1_1.length; _i++) {
        var num = lst_1_1[_i];
        divMessage += " <br> " + num + "";
    }
    demoDiv.innerHTML = " <br> " + divMessage + " <br>";
    ;
    divMessage += " <br> ---------------------------------- Arrays String ----------------------------------  <br>";
    var lstString_1 = ["A", "B", "CJ"];
    for (var _a = 0, lstString_1_1 = lstString_1; _a < lstString_1_1.length; _a++) {
        var str = lstString_1_1[_a];
        divMessage += " <br> " + str + "";
    }
    demoDiv.innerHTML = " <br> " + divMessage + " <br>";
    divMessage += " <br> ---------------------------------- Generic Arrays ----------------------------------  <br>";
    var lst = [1, 2, 3, 4, 5];
    for (var _b = 0, lst_1_2 = lst_1; _b < lst_1_2.length; _b++) {
        var num = lst_1_2[_b];
        divMessage += " <br> " + num + " ";
    }
    demoDiv.innerHTML = " <br> " + divMessage + " <br>";
    divMessage += " <br> ---------------------------------- Arrays String ----------------------------------  <br>";
    var lstString_2 = ["A", "B", "CJ"];
    for (var _c = 0, lstString_2_1 = lstString_2; _c < lstString_2_1.length; _c++) {
        var str = lstString_2_1[_c];
        divMessage += " <br> " + str + " ";
    }
    demoDiv.innerHTML = " <br> " + divMessage + " ";
    divMessage += " <br> ---------------------------------- ReadOnly Array ----------------------------------  <br>";
    var lstReadonlyArray = [
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
    for (var _d = 0, lstReadonlyArray_1 = lstReadonlyArray; _d < lstReadonlyArray_1.length; _d++) {
        var str = lstReadonlyArray_1[_d];
        divMessage += "" + str + " ";
    }
    demoDiv.innerHTML = " <br> " + divMessage + " <br>";
}
//# sourceMappingURL=DataTypeDemo_1.js.map