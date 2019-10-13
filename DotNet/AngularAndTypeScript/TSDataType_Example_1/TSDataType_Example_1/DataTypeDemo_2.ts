{
    let demoDiv = document.getElementById("demoDiv");
    let divMessage: any = "Start Message ";
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- Tuple ---------------------------------- <br> ";
    let _tupleData: [string, number] = ["Data 1", 1000]; 
    //let _tupleData: [string, number] = ["Data 1", "Data 2"];  // Error
    //Access Tuple
    divMessage += "<br>  " + _tupleData[0];
    divMessage += "<br>  " + _tupleData[1];
    demoDiv.innerHTML = divMessage;


    divMessage += "<br> ---------------------------------- Enum ---------------------------------- <br> ";
    enum Color {
        Red,
        Green,
        Blue = 999,
        Yellow
    };

    let _color: Color = Color.Red;
    divMessage += "<br>  " + _color;
    _color = Color.Green;
    divMessage += "<br>  " + _color;
    _color = Color.Blue;
    divMessage += "<br>  " + _color;
    _color = Color.Yellow;
    divMessage += "<br>  " + _color;
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- Any ---------------------------------- <br> ";
    let _AnyData: any = "String\Number\Boolean\Class\Tuple\AnyThing";
    divMessage += "<br>  " + _AnyData;
    _AnyData = Color.Yellow;
    divMessage += "<br>  " + _AnyData;
    _AnyData = _tupleData;
    divMessage += "<br>  " + _AnyData;
    _AnyData = 100;
    divMessage += "<br>  " + _AnyData;
    _AnyData = true;
    divMessage += "<br>  " + _AnyData;
        
    demoDiv.innerHTML = divMessage;

    divMessage += "<br> ---------------------------------- null & undefined ---------------------------------- <br> ";
    let _undefinedData: number;
    divMessage += "<br>  " + _undefinedData;

    let _nullData: number = null;
    divMessage += "<br>  " + _nullData;

    if (_undefinedData == undefined) {
        _undefinedData = 1000;
        divMessage += "<br>  " + _undefinedData;
    }

    if (_nullData == null) {
        _nullData = -99999;
        divMessage += "<br>  " + _nullData;
    }
    demoDiv.innerHTML = divMessage;


    divMessage += "<br> ---------------------------------- void ---------------------------------- <br> ";
    function returnsNothing(): void {
        divMessage += "<br>  returnsNothing() if the function reutrns nothing then the data type can be void";
        demoDiv.innerHTML = divMessage;
    }

    returnsNothing();

    divMessage += "<br> ---------------------------------- Type Inference.... ---------------------------------- <br> ";
    var m$g = 10;
    divMessage += "<br> " + typeof (m$g);

    var m$g1 = "A";
    divMessage += "<br> " + typeof (m$g1);

    divMessage += "<br> m$g = 'A'; // Compilation Error"

    demoDiv.innerHTML = divMessage;
}