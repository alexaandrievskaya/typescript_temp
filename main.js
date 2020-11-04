"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var strJs = 'Any string';
var strTs = 'Any string';
var numJs = 10;
var numTs = 10;
var isTrueJs = true;
var isTrueTs = true;
var anyType = 1;
var strNumType = 1;
var numArrTs = [1, 2, 3];
var numArrTs1 = [1, 2, 3];
var tuplesArray = ['1', 2, false, {}, []]; //any[]
//const firstName: string = 'John';
//const age: number = 25;
//
//function getName(): string {
//    return firstName;
//}
//
//function getAge(): number {
//    return age;
//}
//function getName(name: string): string {
//    return name;
//}
//
//function getAge(age: number): number {
//    return age;
//}
//
//console.log(getName('Joh'), getAge(25));
function getNameAge(name, age) {
    return name + ", " + age;
}
console.log(getNameAge('john', 25));
function consoleLog(str) {
    console.log(str);
}
function sum(a, b) {
    return a + b;
}
var sum2 = sum;
var sum3 = function (a, b) { return a + b; };
//type Person = {
//    name: string,
//    age:number,
//    gender:string,
//    skills:string[],
//    print?:() => void,
//    getSkills?: () => string[]
//}
//
//const person: Person = {
//    name: 'John',
//    age: 25,
//    gender: 'male',
//    skills: ['html', 'css', 'js'],
//    print() {
//        console.log(this.name);
//    }
//};
//
//const person2: Person = {
//    name: 'John',
//    age: 25,
//    gender: 'male',
//    skills: ['html', 'css', 'js'],
//    print() {
//        console.log(this.name);
//    },
//    getSkills() {
//        return this.skills;
//    }
//};
//
//const person3: Person = {
//    name: 'John',
//    age: 25,
//    gender: 'male',
//    skills: ['html', 'css', 'js'],
//};
//перечесления позволяют нам определить набор именованых числовых констант и определяются при
// помощи кдючевого слова enum. Перечесления являются подтипами приметивного типа number
// и в js мы получим объект, который казывает сам на себя. Ключи, которые указывают сами на себя. Можем работать как
// с объектом.
var Skills;
(function (Skills) {
    Skills[Skills["HTML"] = 0] = "HTML";
    Skills[Skills["CSS"] = 1] = "CSS";
    Skills[Skills["JS"] = 2] = "JS";
    Skills[Skills["TS"] = 100] = "TS";
    Skills[Skills["GIT"] = 101] = "GIT";
})(Skills || (Skills = {}));
var ts = Skills.TS;
function error(message) {
    throw new Error(message);
}
// void - ничего не возвращает, а never никогда не наступает
function fail() {
    return error('Error');
}
//class Person {
//    //public name:string;
//    //private age:number;
//    //protected gender:string;
//    //skills:string[];
//    static code = 100;
//
//    constructor(
//        public name:string,
//        protected gender:string,
//        private age:number,
//        public skills:string[]) { }
//
//    public getName(): string {
//        return this.name;
//    }
//
//    getAge(): number {
//        return this.age;
//    }
//    getGender(): string {
//        return this.gender;
//    }
//}
//class Developer extends Person {
//    constructor(name:string, gender: string) {
//        super(name, gender, 25, ['html', 'css', 'js']);
//    }
//
//    getGender(): string {
//        return this.toUpper();
//    }
//
//    private toUpper() {
//        return this.gender.toUpperCase();
//    }
//}
//const person  = new Person('John', 25, 'male', ['html', 'css', 'js']);
//console.log(person);
//console.log(person.getName());
//console.log(person.getAge());
//console.log(person.getGender());
//const developer  = new Developer('Bobi', 'female');
//абстрактные классы - заготовки
var Phone = /** @class */ (function () {
    function Phone(model) {
        this.model = model;
        this.year = 2020;
    }
    Phone.prototype.getPhoneYear = function () {
        return this.year;
    };
    return Phone;
}());
var Xiaomi = /** @class */ (function (_super) {
    __extends(Xiaomi, _super);
    function Xiaomi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 100;
        return _this;
    }
    Xiaomi.prototype.phoneMessage = function (str) {
        console.log(this.model + " is " + str);
    };
    return Xiaomi;
}(Phone));
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 300;
        return _this;
    }
    Samsung.prototype.phoneMessage = function (str) {
        console.log(this.model + " ... " + str);
    };
    return Samsung;
}(Phone));
var xiaomi = new Xiaomi('Xiaomi Mi10');
console.log(xiaomi);
console.log(xiaomi.getPhoneYear());
xiaomi.phoneMessage('Cool');
var samsung = new Samsung('Galaxy S20');
console.log(samsung);
console.log(samsung.getPhoneYear());
samsung.phoneMessage('Not to bad');
function getLength(item) {
    console.log(item.length);
}
var obj = {
    name: 'Any',
    length: 25,
};
getLength('Any String');
getLength([1, 2, 3, 4]);
//getLength({
//    name: 'Any',
//    age: 25,
//});
getLength(obj);
var person = {
    name: 'John',
    age: 25,
    gender: 'male',
    greeting: function (greet) {
        console.log(greet + " " + this.name);
    }
};
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'John';
        this.age = 25;
        this.gender = 'male';
        this.skills = ['html', 'css', 'js'];
    }
    Person.prototype.greeting = function (greet) {
        console.log(greet + " " + this.name);
    };
    ;
    Person.prototype.getSkills = function () {
        return this.skills;
    };
    ;
    return Person;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
        this.name = 'Rectangle';
    }
    Rectangle.prototype.printArea = function () {
        var area = this.height * this.width;
        console.log("Area of " + this.name + " is " + area);
    };
    return Rectangle;
}());
var rect = new Rectangle(10, 30);
rect.printArea();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
        this.name = 'Circle';
    }
    Circle.prototype.printArea = function () {
        var area = Math.PI * Math.pow(this.radius, 2);
        console.log("Area of " + this.name + " is " + area);
    };
    return Circle;
}());
var circle = new Circle(10);
circle.printArea();
//дженерики - обощения
function getData(data) {
    return data;
}
console.log(getData('any string'));
console.log(getData(10));
var newGetData = getData;
console.log(newGetData('any string').length);
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResult = function () {
        return +this.a * +this.b;
    };
    return Multiply;
}());
var m = new Multiply(4, 5);
console.log('res', m.getResult());
var mNum = new Multiply(4, 5);
var mStr = new Multiply('4', '5');
//декоратор - специальная функция, которая пишется перед классами, можно писать и перед свойствами и методами,
// обозначается @, конструктор становится доступен в параметре той функции к которой мы его привязали
function consolLog(constr) {
    console.log(constr);
}
//если нужно передать параметры, то создаем функцию обёртку
function conditionLog(flag) {
    return flag ? consolLog : null;
}
var PersonN = /** @class */ (function () {
    function PersonN(name, age) {
        this.name = name;
        this.age = age;
        console.log('Hello from Person constructor');
    }
    PersonN = __decorate([
        conditionLog(true) //работает как функция если передаем параметр
    ], PersonN);
    return PersonN;
}());
//экземпляр
var prsn = new PersonN('John', 25);
function addGetter(constr) {
    constr.prototype.getInfo = function () {
        var p = document.createElement('p');
        p.innerHTML = JSON.stringify((this)) + "<br>\n            \u0418\u043C\u044F: " + this.name + "<br>\n            \u0412\u043E\u0437\u0440\u0430\u0441\u0442: " + this.age + "<br>\n            \u041F\u043E\u043B: " + this.gender + "<br>\n            \u0421\u043A\u0438\u043B\u043B\u044B: " + this.skills + "<br>\n        ";
        document.body.append(p);
    };
}
var Developer = /** @class */ (function () {
    function Developer(name, age, gender, skills) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.skills = skills;
    }
    Developer = __decorate([
        addGetter //получили прототип
    ], Developer);
    return Developer;
}());
var developer = new Developer('John', 25, 'male', ['HTML', 'CSS', 'JS']);
console.log('developer', developer);
developer.getInfo();
function override(label) {
    return function (target, key) {
        //console.log('override -> target', target); //это конструктор
        //console.log('override -> key', key); //это ключ
        Object.defineProperty(target, key, {
            configurable: false,
            get: function () { return label; },
            set: function (value) { }
        });
    };
}
var Test = /** @class */ (function () {
    function Test() {
        this.name = 'Any string';
    }
    __decorate([
        override('Hello world')
    ], Test.prototype, "name", void 0);
    return Test;
}());
var t = new Test();
console.log(t.name);
function readOnly(target, key) {
    Object.defineProperty(target, key, { writable: false });
}
var Test2 = /** @class */ (function () {
    function Test2() {
        this.name = 'Any string';
    }
    __decorate([
        readOnly
    ], Test2.prototype, "name", void 0);
    return Test2;
}());
var t2 = new Test2();
console.log(t2.name);
//t2.name = 'Ivan name';
//console.log(t2.name);
// при помощи декораторов мы можем гибко переобпределять и настраивать классы, в ангуляре реализовано это в бибилиотеке
//хелперы
function isEmpty(d) {
    return !d;
} //проверка на наличие значения
console.log(isEmpty(''));
console.log(isEmpty('str'));
//проверка на undefined
function isUndefined(d) {
    return typeof d === 'undefined';
}
console.log(isUndefined(10));
console.log(isUndefined('str'));
console.log(isUndefined(undefined));
console.log(isUndefined(null));
var PI = Math.PI;
var EXP = Math.E;
//если нам нужно переиспользовать имя, есть namespace - специализированные именные области
var Util;
(function (Util) {
    function isEmpty(d) {
        return !d;
    }
    function isUndefined(d) {
        return typeof d === 'undefined';
    }
    Util.PI = Math.PI;
    var EXP = Math.E;
})(Util || (Util = {}));
console.log(Util.PI);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLEtBQUssR0FBRyxZQUFZLENBQUM7QUFDekIsSUFBSSxLQUFLLEdBQVcsWUFBWSxDQUFDO0FBR2pDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQztBQUV2QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDcEIsSUFBSSxRQUFRLEdBQVksSUFBSSxDQUFDO0FBRTdCLElBQUksT0FBTyxHQUFRLENBQUMsQ0FBQztBQUVyQixJQUFJLFVBQVUsR0FBOEIsQ0FBQyxDQUFDO0FBRTlDLElBQUksUUFBUSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQyxJQUFJLFNBQVMsR0FBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXpDLElBQUksV0FBVyxHQUEwQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU87QUFFekYsbUNBQW1DO0FBQ25DLHlCQUF5QjtBQUN6QixFQUFFO0FBQ0YsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2QixHQUFHO0FBQ0gsRUFBRTtBQUNGLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFDakIsR0FBRztBQUNILDBDQUEwQztBQUMxQyxrQkFBa0I7QUFDbEIsR0FBRztBQUNILEVBQUU7QUFDRix3Q0FBd0M7QUFDeEMsaUJBQWlCO0FBQ2pCLEdBQUc7QUFDSCxFQUFFO0FBQ0YsMENBQTBDO0FBRTFDLFNBQVMsVUFBVSxDQUFDLElBQVksRUFBRSxHQUFXO0lBQ3pDLE9BQVUsSUFBSSxVQUFLLEdBQUssQ0FBQztBQUM3QixDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxV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