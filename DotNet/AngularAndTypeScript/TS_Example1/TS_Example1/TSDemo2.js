var MyDemo = /** @class */ (function () {
    function MyDemo() {
        this.Hello = function () {
            return "Hello " + this.firstName + " " + this.lastName;
        };
    }
    return MyDemo;
}());
var demo = new MyDemo();
demo.firstName = "CJ";
demo.lastName = "Poojari";
alert(demo.Hello());
//# sourceMappingURL=TSDemo2.js.map