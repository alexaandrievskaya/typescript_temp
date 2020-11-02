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
var Person = /** @class */ (function () {
    function Person(name, gender, age, skills) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.skills = skills;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getGender = function () {
        return this.gender;
    };
    //public name:string;
    //private age:number;
    //protected gender:string;
    //skills:string[];
    Person.code = 100;
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, gender) {
        return _super.call(this, name, gender, 25, ['html', 'css', 'js']) || this;
    }
    Developer.prototype.getGender = function () {
        return this.toUpper();
    };
    Developer.prototype.toUpper = function () {
        return this.gender.toUpperCase();
    };
    return Developer;
}(Person));
var person = new Person('John', 25, 'male', ['html', 'css', 'js']);
console.log(person);
console.log(person.getName());
console.log(person.getAge());
console.log(person.getGender());
var developer = new Developer('Bobi', 'female');
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
        console.log("Area of " + this.name + " is " + this.area);
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
        console.log("Area of " + this.name + " is " + this.area);
    };
    return Circle;
}());
var circle = new Circle(10);
circle.printArea();
