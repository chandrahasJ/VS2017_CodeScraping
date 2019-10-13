{
    var demoDiv = document.getElementById("demoDiv");
    var divMessage = "Start Message";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Object Destructing ----------------------------------  <br> ";

    divMessage += "<b>Destructing</b> is the convenient way of <b>extracting data</b> stored in the <br>";
    divMessage += "<b>Object</b> & <b>Array</b> <br>";
    divMessage += "Order doesn't matter let {b,a} = o1; is same as let {a,b}=o1; <br>";
    divMessage += "Whenever we require partial data from Array or Object in the LHS into the RHS<br><br><b>";
    
    let o1 = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let user = {
        department: "CS",
        name: "Chandrahas Poojari",
        favPeople: {
            One: {
                name: "Tesla",
                task: "Great Man"
            },
            Two: {
                name: "Kalam",
                task: "Great Man\Missle Man of India"
            }
        }
    };

    let user2 = {
        department: "CS",
        name: "Chandrahas Poojari",
        favPeople: {
            One: {
                name: "Tesla",
                task: "Great Man"
            },
            Two: {
                name: "Kalam",
                task: "Great Man\Missle Man of India"
            }
        },
        hobbies : ["Electricity","Space"]
    };

    let myUserData = [
        {
            name: "CJ",
            department : "CS"
        },
        {
            name: "CP",
            department: "Arts"
        },
        {
            name: "SJ",
            department: "BMM"
        }
    ];

    divMessage += `
       let user = {
            department: "CS",
            name: "Chandrahas Poojari",
            favPeople: {
                One: {
                    name: "Tesla",
                    task: "Great Man"
                },
                Two: {
                    name: "Kalam",
                    task: "Great Man\Missle Man of India"
                }
            }
        };
        <br>
    `;

    divMessage += `
         let user2 = {
                department: "CS",
                name: "Chandrahas Poojari",
                favPeople: {
                    One: {
                        name: "Tesla",
                        task: "Great Man"
                    },
                    Two: {
                        name: "Kalam",
                        task: "Great Man\Missle Man of India"
                    }
                },
                hobbies : ["Electricity","Space"]
            };
        <br>
    `;

    divMessage += `         
            let myUserData = [
                {
                    name: "CJ",
                    department : "CS"
                },
                {
                    name: "CP",
                    department: "Arts"
                },
                {
                    name: "SJ",
                    department: "BMM"
                }
            ];
        <br>
    `;

    divMessage += `
       let o1 = {
            a: "foo",
            b: 12,
            c: "bar"
        };
        <br>
    `;
    demoDiv.innerHTML = divMessage;

    divMessage += "</b> <br> ---------------------------------- Example Type 1-> <b>AAM Zindgi</b>-----------------------------------  <br> ";
  

    let a1 = o1.a;
    let b1 = o1.b;

    divMessage += "Normal way to get data from objects -- <b>AAM Zindgi</b> <br>";
    divMessage += " let a1 = o1.a; <br>";
    divMessage += "  let b1 = o1.b;  <br>";
    divMessage += "input data - a1: " + a1 + " - b1 :" + b1 + " <br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-> <b>Mentos Zindgi</b>-----------------------------------  <br> ";

    let { a, b } = o1;

    divMessage += " Object Destructing(property name should be same or we can use <b>property renaming</b> feature of Typescript) ";
    divMessage += "  <b>Mentos Zindgi</b> <br>";
    divMessage += "   let { a, b } = o1; <br>";
    divMessage += "input data - a: " + a + " - b :" + b + " <br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-1> <b>property renaming</b>-----------------------------------  <br> ";

    let { a :A, b:B } = o1;

    divMessage += "    let { a :A, b:B } = o1; <br>";
    divMessage += "input data - A: " + A + " - B :" +B + " <br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-2> <b>...(Spreading Operator)</b>-----------------------------------  <br> ";

    let { a: A1, ...Rest } = o1;
    
    divMessage += "   let { a:A1,...Rest } = o1; <br>";
    divMessage += "input data - A1: " + A1 + " - b :" + Rest.b + " - c :" + Rest.c +  " <br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-3> <b>Nested Object Destructing</b>-----------------------------------  <br> ";

    let { favPeople: { One ,Two } } = user;

    divMessage += "   let { favPeople: { One ,Two } } = user; <br>";
    divMessage += "input data - One: Name :>  " + One.name + " Task :>  " + One.task
        + " - Two:Name :" + Two.name + " Task :" + Two.task + " <br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-4> <b>Mixed Destructing</b>-----------------------------------  <br> ";

    let { favPeople: { One : P1, Two: P2 }, hobbies :[H1,H2] } = user2;

    divMessage += "   let { favPeople: { One ,Two } } = user; <br>";
    divMessage += "input Object data - P1: Name :>  " + P1.name + " Task :>  " + P1.task
        + " - P2:Name :" + P2.name + " Task :" + P2.task + " <br>";
    divMessage += "input Array data - H1: " + H1 + " - H2 :" + H2 +" <br>";
    demoDiv.innerHTML = divMessage;

    divMessage += " <br> ---------------------------------- Example Type 2-5> <b>For...Of</b>-----------------------------------  <br> ";

    divMessage += `
         for (var { name : _name, department } of myUserData) { <br>
            divMessage += " _name :> "+_name +". department : "+department+""; <br>
        } <br>
    `;

    for (var { name: _name, department } of myUserData) {
        divMessage += " _name :> " + _name + ". department : " + department + "<br>";
    }
    demoDiv.innerHTML = divMessage;
}