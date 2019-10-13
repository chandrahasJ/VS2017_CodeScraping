var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
{
    var demoDiv = document.getElementById("demoDiv");
    var divMessage = "Start Message";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Object Destructing ----------------------------------  <br> ";
    divMessage += "<b>Destructing</b> is the convenient way of <b>extracting data</b> stored in the <br>";
    divMessage += "<b>Object</b> & <b>Array</b> <br>";
    divMessage += "Order doesn't matter let {b,a} = o1; is same as let {a,b}=o1; <br>";
    divMessage += "Whenever we require partial data from Array or Object in the LHS into the RHS<br><br><b>";
    var o1 = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    var user = {
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
    var user2 = {
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
        hobbies: ["Electricity", "Space"]
    };
    var myUserData = [
        {
            name: "CJ",
            department: "CS"
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
    divMessage += "\n       let user = {\n            department: \"CS\",\n            name: \"Chandrahas Poojari\",\n            favPeople: {\n                One: {\n                    name: \"Tesla\",\n                    task: \"Great Man\"\n                },\n                Two: {\n                    name: \"Kalam\",\n                    task: \"Great ManMissle Man of India\"\n                }\n            }\n        };\n        <br>\n    ";
    divMessage += "\n         let user2 = {\n                department: \"CS\",\n                name: \"Chandrahas Poojari\",\n                favPeople: {\n                    One: {\n                        name: \"Tesla\",\n                        task: \"Great Man\"\n                    },\n                    Two: {\n                        name: \"Kalam\",\n                        task: \"Great ManMissle Man of India\"\n                    }\n                },\n                hobbies : [\"Electricity\",\"Space\"]\n            };\n        <br>\n    ";
    divMessage += "         \n            let myUserData = [\n                {\n                    name: \"CJ\",\n                    department : \"CS\"\n                },\n                {\n                    name: \"CP\",\n                    department: \"Arts\"\n                },\n                {\n                    name: \"SJ\",\n                    department: \"BMM\"\n                }\n            ];\n        <br>\n    ";
    divMessage += "\n       let o1 = {\n            a: \"foo\",\n            b: 12,\n            c: \"bar\"\n        };\n        <br>\n    ";
    demoDiv.innerHTML = divMessage;
    divMessage += "</b> <br> ---------------------------------- Example Type 1-> <b>AAM Zindgi</b>-----------------------------------  <br> ";
    var a1 = o1.a;
    var b1 = o1.b;
    divMessage += "Normal way to get data from objects -- <b>AAM Zindgi</b> <br>";
    divMessage += " let a1 = o1.a; <br>";
    divMessage += "  let b1 = o1.b;  <br>";
    divMessage += "input data - a1: " + a1 + " - b1 :" + b1 + " <br>";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Example Type 2-> <b>Mentos Zindgi</b>-----------------------------------  <br> ";
    var a = o1.a, b = o1.b;
    divMessage += " Object Destructing(property name should be same or we can use <b>property renaming</b> feature of Typescript) ";
    divMessage += "  <b>Mentos Zindgi</b> <br>";
    divMessage += "   let { a, b } = o1; <br>";
    divMessage += "input data - a: " + a + " - b :" + b + " <br>";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Example Type 2-1> <b>property renaming</b>-----------------------------------  <br> ";
    var A = o1.a, B = o1.b;
    divMessage += "    let { a :A, b:B } = o1; <br>";
    divMessage += "input data - A: " + A + " - B :" + B + " <br>";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Example Type 2-2> <b>...(Spreading Operator)</b>-----------------------------------  <br> ";
    var A1 = o1.a, Rest = __rest(o1, ["a"]);
    divMessage += "   let { a:A1,...Rest } = o1; <br>";
    divMessage += "input data - A1: " + A1 + " - b :" + Rest.b + " - c :" + Rest.c + " <br>";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Example Type 2-3> <b>Nested Object Destructing</b>-----------------------------------  <br> ";
    var _a = user.favPeople, One = _a.One, Two = _a.Two;
    divMessage += "   let { favPeople: { One ,Two } } = user; <br>";
    divMessage += "input data - One: Name :>  " + One.name + " Task :>  " + One.task
        + " - Two:Name :" + Two.name + " Task :" + Two.task + " <br>";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Example Type 2-4> <b>Mixed Destructing</b>-----------------------------------  <br> ";
    var _b = user2.favPeople, P1 = _b.One, P2 = _b.Two, _c = user2.hobbies, H1 = _c[0], H2 = _c[1];
    divMessage += "   let { favPeople: { One ,Two } } = user; <br>";
    divMessage += "input Object data - P1: Name :>  " + P1.name + " Task :>  " + P1.task
        + " - P2:Name :" + P2.name + " Task :" + P2.task + " <br>";
    divMessage += "input Array data - H1: " + H1 + " - H2 :" + H2 + " <br>";
    demoDiv.innerHTML = divMessage;
    divMessage += " <br> ---------------------------------- Example Type 2-5> <b>For...Of</b>-----------------------------------  <br> ";
    divMessage += "\n         for (var { name : _name, department } of myUserData) { <br>\n            divMessage += \" _name :> \"+_name +\". department : \"+department+\"\"; <br>\n        } <br>\n    ";
    for (var _i = 0, myUserData_1 = myUserData; _i < myUserData_1.length; _i++) {
        var _d = myUserData_1[_i], _name = _d.name, department = _d.department;
        divMessage += " _name :> " + _name + ". department : " + department + "<br>";
    }
    demoDiv.innerHTML = divMessage;
}
//# sourceMappingURL=DS_Demo_ObjectDes.js.map