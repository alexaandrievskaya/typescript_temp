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

class Person {
    //public name:string;
    //private age:number;
    //protected gender:string;
    //skills:string[];
    static code = 100;

    constructor(
        public name:string,
        protected gender:string,
        private age:number,
        public skills:string[]) { }

    public getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
    getGender(): string {
        return this.gender;
    }
}

class Developer extends Person {
    constructor(name:string, gender: string) {
        super(name, gender, 25, ['html', 'css', 'js']);
    }

    getGender(): string {
        return this.toUpper();
    }

    private toUpper() {
        return this.gender.toUpperCase();
    }
}

const person  = new Person('John', 25, 'male', ['html', 'css', 'js']);

console.log(person);
console.log(person.getName());
console.log(person.getAge());
console.log(person.getGender());

const developer  = new Developer('Bobi', 'female');

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

        console.log(`Area of ${this.name} is ${this.area}`)
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

        console.log(`Area of ${this.name} is ${this.area}`)
    }
}
const circle = new Circle(10);
circle.printArea();