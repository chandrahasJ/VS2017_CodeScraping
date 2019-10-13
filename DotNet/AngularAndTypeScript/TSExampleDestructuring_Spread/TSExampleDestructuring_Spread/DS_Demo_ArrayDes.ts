{
    var demoDiv = document.getElementById("demoDiv");
    var divMessage = "Start Message";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Array Destructing ----------------------------------  <br> ";

    divMessage += "<b>Destructing</b> is the convenient way of <b>extracting data</b> stored in the <br>";
    divMessage += "<b>Object</b> & <b>Array</b> <br>";
    divMessage += "Whenever we require partial data from Array or Object in the LHS into the RHS<br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 1----------------------------------  <br> ";
    let input = [1, 2, 3,4,5,6,7,8];
    let first_normal: number = input[0];
    let second_normal: number = input[1];
    let third_normal: number = input[2];    
    
    divMessage += "    let input = [1, 2, 3,4,5,6,7,8]; <br>";
    divMessage += " let first_normal: number = input[0];  <br>";
    divMessage += " let second_normal: number = input[1]; <br>";
    divMessage += " let third_normal: number = input[2]; <br>";
    divMessage += "input data - first_normal: " + first_normal + " - second_normal :" + second_normal + " - third_normal:" + third_normal + " <br>";

    let [first, second, third] = input;
    divMessage += " let [first, second, third] = input; <br>";
    divMessage += "input data used via destructing - " + first + " - " + second + " - " + third + " <br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2 Using ...(Spread Operator) ----------------------------------  <br> ";
    let [n1, ...restdata] = input;
    divMessage += "  let [n1, ...restdata] = input; <br>";   
    divMessage += "n1 :> " + n1 + ".   restdata ;> " + restdata + "<br>";     
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-1 Using ...(Spread Operator) ----------------------------------  <br> ";
    let [a1, a2, ...restdata1] = input;
    divMessage += "  let [a1, a2, ...restdata1] = input; <br>";
    divMessage += "a1 :> " + a1 + ".   restdata ;> " + restdata1 + "<br>";     
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-2 Using ...(Spread Operator) ----------------------------------  <br> ";
    let [m1] = input;
    divMessage += "  let [m1] = input; <br>";
    divMessage += "m1 :> " + m1 + ".   Rest of the dat will be neglected..<br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-3 Using ...(Spread Operator) ----------------------------------  <br> ";
    let [,,m2] = input; 
    divMessage += "  let [,,m2] = input;  <br>";
    divMessage += "m2 :> " + m2 + ".  (,) Comma will be neglected i.e. m2 = 3 Rest of the dat will be neglected..<br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-4 Using ...(Spread Operator) ----------------------------------  <br> ";
    let [, , m3, m4 , ,m5 ] = input;
    divMessage += "   let [, , m3, m4 , ,m5 ] = input;  <br>";
    divMessage += "m3 :> " + m3 + ".  m4 :> " + m4 + ".  m5 :> " + m5 + ". (,) Comma will be neglected i.e. m3 = 3, m4 = 4  & m5 = 6 <br>";
    divMessage += " Rest of the dat will be neglected..<br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-5 Using ...(Spread Operator) ----------------------------------  <br> ";
    let [totalDate, year, month, day] = /^(\d{4})-(\d{2})-(\d{2})$/.exec("1988-07-07") || ["No Data","","",""];
    divMessage += "  let [totalDate, year, month, day] = /^(\d{4})-(\d{2})-(\d{2})$/.exec('1988 - 07 - 07') || ['No Data','','','']; <br>";
    divMessage += " TotalDate :> "+totalDate + ". Year :> "+year+". month :>"+month+". day :> "+day+". <br>"    
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-6 Using ...(Spread Operator) ----------------------------------  <br> ";
    let [totalDate1, year1, month1, day1] = /^(\d{4})-(\d{2})-(\d{2})$/.exec("1988-7-07") || ["No Data", "", "", ""];
    divMessage += "  let [totalDate, year, month, day] = /^(\d{4})-(\d{2})-(\d{2})$/.exec('1988 - 07 - 07') || ['No Data','','','']; <br>";
    divMessage += " totalDate1 :> " + totalDate1 + ". year1 :> " + year1 + ". month1 :>" + month1 + ". day1 :> " + day1 + ". <br>"
    divMessage += " No Date will be displayed as exec will not be able to process regex.<br>";
    demoDiv.innerHTML = divMessage;
}