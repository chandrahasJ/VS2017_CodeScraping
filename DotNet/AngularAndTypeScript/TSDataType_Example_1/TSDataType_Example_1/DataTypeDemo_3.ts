{
    let demoDiv = document.getElementById("demoDiv");
    let divMessage: any = "Start Message ";
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- Angle–bracket syntax.  ----------------------------------  ";
    divMessage += "<br> Type Casting only works if the data type is (any) ";
    let someValue: any = "this is string";
    let strLength: number = (<string>someValue).length;

    divMessage += "<br> someValue ->>> " + someValue + "    strLength :>>" + strLength;
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- as syntax.  ---------------------------------- ";
    let someValue_1: any = "this is string";
    let strLength_1: number = (someValue as string).length;

    divMessage += "<br> someValue_1 ->>> " + someValue_1 + "    strLength_1 :>>" + strLength_1;
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- Issue with TypeCasting...  ----------------------------------  ";
    let someValue_2: any = "A";
    let _numberValue_2: number = someValue_2 as number;
    let _number: number = (_numberValue_2) + 1;

    divMessage += "<br> someValue_2 ->>> " + someValue_2 + "    _numberValue_2 :>>" + _numberValue_2 + " _number :> " + _number;
    divMessage += "<br> In run time, this will fail if you try do any numeric operation on the same  <br> ";
    divMessage += "This is will be logical error.... We need to be careful about this behavoir <br> ";
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- let & var ----------------------------------  ";
    divMessage += "<br> Example of var ";
    var _varMessage: string = "Hi My Friend";
    if (true) {
        var _varMessage: string = "Hi Chandrahas";
    }
    divMessage += "<br>  _varMessage :>" + _varMessage;
    divMessage += "<br>  So as you see 'Hi Chandrahas' was printed as var variables is global scoped";
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- let & var ----------------------------------";
    divMessage += "<br> Example of let";
    let _letMessage: string = "Hi my friend Chandrahas";
    if (true) {
        let _letMessage: string = "This will not be shown";
    }
    divMessage += "<br>  _letMessage  :>" + _letMessage;
    divMessage += "<br>  So as you can see 'Hi my friend Chandrahas' has been printed. let is function scoped.";
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- let & var ---------------------------------- <br> ";
    divMessage += "<br> var variables can be used before it was declared.";
    divMessage += "<br> let variables cann't be used before it was declared.";
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- const ---------------------------------- <br> ";
    const _constValue: number = 10;
    const _constObject = {
        NumberOfValue :10,
        Name:"Chandrahas"
    }
    //_constValue = 1000; 

    divMessage += "<br> const variables are immutable(can't be modified once it is intialized). ReAssigment is not allowed";
    divMessage += "<br> const variables must be initialized and declared at the same time";
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- for of & for in ---------------------------------- <br> ";
    divMessage += "for in is used when we want list of keys to access the value we need to use the key..";
    let _lstforin: string[] = ["A", "B", "C"]
    for (let str in _lstforin) {
        divMessage += "<br> str:>" + str + " _lstforin[str]:>>> " + _lstforin[str];
    }

    divMessage += " <br> for of is used when we want list of values directly  <br> ";
    let _lstforof: string[] = ["A", "B", "C"]
    for (let str of _lstforof) {
        divMessage += " " + str + " ";
    }

    demoDiv.innerHTML = divMessage;
}