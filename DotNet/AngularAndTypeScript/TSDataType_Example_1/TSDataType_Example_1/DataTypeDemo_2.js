{
    var demoDiv_1 = document.getElementById("demoDiv");
    var divMessage_1 = "Start Message ";
    demoDiv_1.innerHTML = divMessage_1;
    divMessage_1 += "<br> ---------------------------------- Tuple ---------------------------------- <br> ";
    var _tupleData = ["Data 1", 1000];
    //let _tupleData: [string, number] = ["Data 1", "Data 2"];  // Error
    //Access Tuple
    divMessage_1 += "<br>  " + _tupleData[0];
    divMessage_1 += "<br>  " + _tupleData[1];
    demoDiv_1.innerHTML = divMessage_1;
    divMessage_1 += "<br> ---------------------------------- Enum ---------------------------------- <br> ";
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 999] = "Blue";
        Color[Color["Yellow"] = 1000] = "Yellow";
    })(Color || (Color = {}));
    ;
    var _color = Color.Red;
    divMessage_1 += "<br>  " + _color;
    _color = Color.Green;
    divMessage_1 += "<br>  " + _color;
    _color = Color.Blue;
    divMessage_1 += "<br>  " + _color;
    _color = Color.Yellow;
    divMessage_1 += "<br>  " + _color;
    demoDiv_1.innerHTML = divMessage_1;
    divMessage_1 += "<br> ---------------------------------- Any ---------------------------------- <br> ";
    var _AnyData = "String\Number\Boolean\Class\Tuple\AnyThing";
    divMessage_1 += "<br>  " + _AnyData;
    _AnyData = Color.Yellow;
    divMessage_1 += "<br>  " + _AnyData;
    _AnyData = _tupleData;
    divMessage_1 += "<br>  " + _AnyData;
    _AnyData = 100;
    divMessage_1 += "<br>  " + _AnyData;
    _AnyData = true;
    divMessage_1 += "<br>  " + _AnyData;
    demoDiv_1.innerHTML = divMessage_1;
    divMessage_1 += "<br> ---------------------------------- null & undefined ---------------------------------- <br> ";
    var _undefinedData = void 0;
    divMessage_1 += "<br>  " + _undefinedData;
    var _nullData = null;
    divMessage_1 += "<br>  " + _nullData;
    if (_undefinedData == undefined) {
        _undefinedData = 1000;
        divMessage_1 += "<br>  " + _undefinedData;
    }
    if (_nullData == null) {
        _nullData = -99999;
        divMessage_1 += "<br>  " + _nullData;
    }
    demoDiv_1.innerHTML = divMessage_1;
    divMessage_1 += "<br> ---------------------------------- void ---------------------------------- <br> ";
    function returnsNothing() {
        divMessage_1 += "<br>  returnsNothing() if the function reutrns nothing then the data type can be void";
        demoDiv_1.innerHTML = divMessage_1;
    }
    returnsNothing();
    divMessage_1 += "<br> ---------------------------------- Type Inference.... ---------------------------------- <br> ";
    var m$g = 10;
    divMessage_1 += "<br> " + typeof (m$g);
    var m$g1 = "A";
    divMessage_1 += "<br> " + typeof (m$g1);
    divMessage_1 += "<br> m$g = 'A'; // Compilation Error";
    demoDiv_1.innerHTML = divMessage_1;
}
//# sourceMappingURL=DataTypeDemo_2.js.map