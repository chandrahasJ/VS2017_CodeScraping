class MyDemo {
    firstName: string;
    lastName: string;
    Hello = function () : string {
        return "Hello " + this.firstName + " " + this.lastName;
    }
}

var demo: MyDemo = new MyDemo();
demo.firstName = "CJ";
demo.lastName = "Poojari";

alert(demo.Hello());