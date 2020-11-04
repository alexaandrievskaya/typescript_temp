let strJs = 'Any string';
let strTs: string = 'Any string';


let numJs = 10;
let numTs: number = 10;

let isTrueJs = true;
let isTrueTs: boolean = true;

let anyType: any = 1;

let strNumType: number | string | boolean = 1;

let numArrTs: number[] = [1, 2, 3];
let numArrTs1: Array<number> = [1, 2, 3];

let tuplesArray: [string, number, boolean, object, []] = ['1', 2, false, {}, []]; //any[]

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

function getNameAge(name: string, age: number): string {
    return `${name}, ${age}`;
}

console.log(getNameAge('john', 25));

function consoleLog(str: string): void {
    console.log(str);
}

function sum(a: number, b: number): number {
    return a + b;
}

const sum2: (a: number, b: number) => number = sum;

const sum3 = (a: number, b: number) => a + b;

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

enum Skills {
    HTML,
    CSS,
    JS,
    TS= 100,
    GIT
}

const ts: Skills = Skills.TS;

function error(message: string): never {
    throw new Error(message);
}

// void - ничего не возвращает, а never никогда не наступает

function fail(): never {
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
abstract class Phone {
    public year:number = 2020;

    abstract price: number;

    constructor(public model:string) {}

    public abstract phoneMessage(str: string): void;

    getPhoneYear():number {
        return this.year;
    }
}

class Xiaomi extends Phone {
    price = 100;
    phoneMessage(str: string): void {
        console.log(`${this.model} is ${str}`);
    }
}

class Samsung extends Phone {
    price = 300;
    phoneMessage(str: string): void {
        console.log(`${this.model} ... ${str}`);
    }
}

const xiaomi = new Xiaomi('Xiaomi Mi10');

console.log(xiaomi);
console.log(xiaomi.getPhoneYear());
xiaomi.phoneMessage('Cool');

const samsung = new Samsung('Galaxy S20');

console.log(samsung);
console.log(samsung.getPhoneYear());
samsung.phoneMessage('Not to bad');

///////////////////////////////////////////////////////////

interface ILength {
    length: number;
}

function getLength(item: ILength): void {
    console.log(item.length);
}

const obj = {
    name: 'Any',
    length: 25,
}

getLength('Any String');
getLength([1, 2, 3, 4]);
//getLength({
//    name: 'Any',
//    age: 25,
//});
getLength(obj);

interface IPerson {
    name: string;
    age: number;
    gender: string;
    greeting(s: string): void;
}

interface IGetSkills {
    getSkills(): string[];
}

const person: IPerson = {
    name: 'John',
    age: 25,
    gender: 'male',
    greeting(greet: string) {
        console.log(`${greet} ${this.name}`)
    }
};

class Person implements IPerson, IGetSkills {
    name = 'John';
    age = 25;
    gender = 'male';
    skills = ['html', 'css', 'js']
    greeting(greet: string) {
        console.log(`${greet} ${this.name}`)
    };

    getSkills(): string[] {
        return this.skills
    };
}

interface Shape {
    name: string;
    printArea: () => void;
}

class Rectangle implements Shape {
    name:string = 'Rectangle'
    constructor(public height:number, public width:number) {
    }

    printArea() {
        const area:number = this.height * this.width;

        console.log(`Area of ${this.name} is ${area}`)
    }
}

const rect = new Rectangle(10,30);
rect.printArea();

class Circle implements Shape {
    name:string = 'Circle'
    constructor(public radius:number) {
    }

    printArea() {
        const area:number = Math.PI * Math.pow(this.radius, 2);

        console.log(`Area of ${this.name} is ${area}`)
    }
}
const circle = new Circle(10);
circle.printArea();

//дженерики - обощения

function getData<T>(data:T): T {
    return data;
}

console.log(getData('any string'));
console.log(getData(10));

const newGetData: <T>(d:T) => T = getData;
console.log(newGetData('any string').length);

class Multiply<T extends number | string> {
    constructor(private a:T, private b:T) {  }

    public getResult():number {
        return +this.a * +this.b;
    }
}

const m = new Multiply(4, 5);

console.log('res', m.getResult());

const mNum = new Multiply<number>(4, 5);
const mStr = new Multiply<string>('4', '5');


//декоратор - специальная функция, которая пишется перед классами, можно писать и перед свойствами и методами,
// обозначается @, конструктор становится доступен в параметре той функции к которой мы его привязали

function consolLog(constr:Function) {
    console.log(constr);
}

//если нужно передать параметры, то создаем функцию обёртку
function conditionLog(flag:boolean):any {
    return flag ? consolLog : null;
}

@conditionLog(true) //работает как функция если передаем параметр
class PersonN {
    constructor(public name: string, public age:number) {
        console.log('Hello from Person constructor');
    }
}

//экземпляр
const prsn = new PersonN('John', 25);

function addGetter(constr: Function) {
    constr.prototype.getInfo = function () {
        const p = document.createElement('p');

        p.innerHTML = `${JSON.stringify((this))}<br>
            Имя: ${this.name}<br>
            Возраст: ${this.age}<br>
            Пол: ${this.gender}<br>
            Скиллы: ${this.skills}<br>
        `;

        document.body.append(p);
    }
}

@addGetter //получили прототип
class Developer {
    constructor(public name:string,
                public age:number,
                public gender:string,
                public skills:string[]
    ) {}

    //переносим данный метод в декоратор
    //getInfo(): void {
    //    const p = document.createElement('p');
//
    //    p.innerHTML = `${JSON.stringify((this))}<br>
    //        Имя: ${this.name}<br>
    //        Возраст: ${this.age}<br>
    //        Пол: ${this.gender}<br>
    //        Скиллы: ${this.skills}<br>
    //    `;
//
    //    document.body.append(p);
    //}
}

const developer = new Developer('John', 25, 'male', ['HTML', 'CSS', 'JS']);

console.log('developer', developer);
(<any>developer).getInfo();


function override(label:string) {
    return function (target:any, key:string) {
        //console.log('override -> target', target); //это конструктор
        //console.log('override -> key', key); //это ключ

        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label,
            set: (value) => {}
        })
    };
}


class Test {
    @override('Hello world')
    name: string = 'Any string';
}

const t = new Test();
console.log(t.name);


function readOnly(target:any, key:string) {
    Object.defineProperty(target, key, {writable: false});
}

class Test2 {
    @readOnly
    name: string = 'Any string';
}

const t2 = new Test2();
console.log(t2.name);

//t2.name = 'Ivan name';
//console.log(t2.name);
// при помощи декораторов мы можем гибко переобпределять и настраивать классы, в ангуляре реализовано это в бибилиотеке

//хелперы
function isEmpty(d:any): boolean {
    return  !d;
} //проверка на наличие значения

console.log(isEmpty(''));
console.log(isEmpty('str'));

//проверка на undefined
function isUndefined(d:any): boolean {
    return typeof d === 'undefined';
}

console.log(isUndefined(10));
console.log(isUndefined('str'));
console.log(isUndefined(undefined));
console.log(isUndefined(null));

const PI = Math.PI;
const EXP = Math.E;

//если нам нужно переиспользовать имя, есть namespace - специализированные именные области
namespace Util {
    function isEmpty(d:any): boolean {
        return  !d;
    }

    function isUndefined(d:any): boolean {
        return typeof d === 'undefined';
    }

    export const PI = Math.PI;
    const EXP = Math.E;
}

console.log(Util.PI);