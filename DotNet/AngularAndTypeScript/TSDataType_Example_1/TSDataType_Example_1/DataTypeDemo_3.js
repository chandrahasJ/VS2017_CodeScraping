{
    var demoDiv = document.getElementById("demoDiv");
    var divMessage = "Start Message ";
    demoDiv.innerHTML = divMessage;
    divMessage += "<br> ---------------------------------- Angle–bracket syntax.  ----------------------------------  ";
    divMessage += "<br> Type Casting only works if the data type is (any) ";
    var someValue = "this is string";
    var strLength = someValue.length;
    divMessage += "<br> someValue ->>> " + someValue + "    strLength :>>" + strLength;
    demoDiv.innerHTML = divMessage;
    divMessage += "<br> ---------------------------------- as syntax.  ---------------------------------- ";
    var someValue_1 = "this is string";
    var strLength_1 = someValue.length;
    divMessage += "<br> someValue_1 ->>> " + someValue_1 + "    strLength_1 :>>" + strLength_1;
    demoDiv.innerHTML = divMessage;
    divMessage += "<br> ---------------------------------- Issue with TypeCasting...  ----------------------------------  ";
    var someValue_2 = "A";
    var _numberValue_2 = someValue_2;
    var _number = (_numberValue_2) + 1;
    divMessage += "<br> someValue_2 ->>> " + someValue_2 + "    _numberValue_2 :>>" + _numberValue_2 + " _number :> " + _number;
    divMessage += "<br> In run time, this will fail if you try do any numeric operation on the same  <br> ";
    divMessage += "This is will be logical error.... We need to be careful about this behavoir <br> ";
    demoDiv.innerHTML = divMessage;
    divMessage += "<br> ---------------------------------- let & var ----------------------------------  ";
    divMessage += "<br> Example of var ";
    var _varMessage = "Hi My Friend";
    if (true) {
        var _varMessage = "Hi Chandrahas";
    }
    divMessage += "<br>  _varMessage :>" + _varMessage;
    divMessage += "<br>  So as you see 'Hi Chandrahas' was printed as var variables is global scoped";
    demoDiv.innerHTML = divMessage;
    divMessage += "<br> ---------------------------------- let & var ----------------------------------";
    divMessage += "<br> Example of let";
    var _letMessage = "Hi my friend Chandrahas";
    if (true) {
        var _letMessage_1 = "This will not be shown";
    }
    divMessage += "<br>  _letMessage  :>" + _letMessage;
    divMessage += "<br>  So as you can see 'Hi my friend Chandrahas' has been printed. let is function scoped.";
    demoDiv.innerHTML = divMessage;
    divMessage += "<br> ---------------------------------- let & var ---------------------------------- <br> ";
    divMessage += "<br> var variables can be used before it was declared.";
    divMessage += "<br> let variables cann't be used before it was declared.";
    demoDiv.innerHTML = divMessage;
    divMessage += "<br> ---------------------------------- const ---------------------------------- <br> ";
    var _constValue = 10;
    var _constObject = {
        NumberOfValue: 10,
        Name: "Chandrahas"
    };
    //_constValue = 1000; 
    divMessage += "<br> const variables are immutable(can't be modified once it is intialized). ReAssigment is not allowed";
    divMessage += "<br> const variables must be initialized and declared at the same time";
    demoDiv.innerHTML = divMessage;
    divMessage += "<br> ---------------------------------- for of & for in ---------------------------------- <br> ";
    divMessage += "for in is used when we want list of keys to access the value we need to use the key..";
    var _lstforin = ["A", "B", "C"];
    for (var str in _lstforin) {
        divMessage += "<br> str:>" + str + " _lstforin[str]:>>> " + _lstforin[str];
    }
    divMessage += " <br> for of is used when we want list of values directly  <br> ";
    var _lstforof = ["A", "B", "C"];
    for (var _i = 0, _lstforof_1 = _lstforof; _i < _lstforof_1.length; _i++) {
        var str = _lstforof_1[_i];
        divMessage += " " + str + " ";
    }
    demoDiv.innerHTML = divMessage;
}
//# sourceMappingURL=DataTypeDemo_3.js.map