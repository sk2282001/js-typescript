// TypeScript simple types
const message:string = 'hello world';
console.log(message); 

const age:Number = 22;
console.log(age)

let age1: number | string = '23';
age1 = 34;
console.log(typeof age1)

const json = JSON.parse('56');
console.log(typeof json)

// TypeScript special types

// const x:never = true;

let v: any = true;
v = 'string';
Math.round(v);
console.log(v);

const y: undefined = undefined;
const z: null = null

//TypeScript Arrays

const names: string[] = [];
names.push('saravanan');
console.log(names);

const names1: readonly string[] = ['Hi saravanan'];
// names1.push['saravanan'];
console.log(names1)

const store: string[] = [];
store.push('saravanan');
console.log(store)

// basic types

const id: number = 1;
const intern: string = 'aequalis';
const isvalid: boolean = true;
const x: any = 'hello';

const ids: number[] = [1,2,3,4,5];
const arr: any[] = [1, 'saravanan', true];
console.log(arr);

// TS Arrays
const names2: readonly string[] = ["Dylan"];
// names2.push("Jack");
console.log(names2);

const numbers = [1,2,3];
numbers.push(4); // no error
// numbers.push("5"); // error
console.log(numbers)

const head:number = numbers[0];
console.log(head)

// TS Tuples

let ourtuples: [number, boolean, string];
ourtuples = [1, true, 'saravanan'];
console.log(ourtuples)

let ourtuples1: [number, boolean, string];
// ourtuples1 = [false, 'Coding is my guess', 200];
// console.log(ourtuples1)

let ourtuples2: [number, boolean, string];
// let ourtuples2: readonly [number, boolean, string];
ourtuples2 = [5, true, 'Hi i am saravanan'];
// no type safety in tuples

ourtuples2.push('hook the knife');
console.log(ourtuples2);

//Tuple Array
let employee: [number, string][];

employee = [
    [1, 'saravanan'],
    [2, 'udhai'],
    [3, 'sivakumar'],
]
console.log(employee)

employee.push([23, 'tamil']);
console.log(employee);

// Union
let id1: string | number = '56';
id1 = 56;
console.log(typeof id1);

//Enum
enum Direction1{
    Up = 1,Down,Left,Right,
}

enum Direction2{
    Up = 'Up',Down = 'Down',Left = 'Left',Right = 'Right',
}
console.log(Direction2.Left)

console.log(Direction1[0])
console.log(Direction1[1])
console.log(Direction1.Up)
console.log(Direction1.Left)

//Objects
type User = {
    id: number,
    name: string
}
const user11: User = {id: 11, name: 'saravanansivakumar'}
console.log(user11);

const user1: {id: number, name: string} = {id: 1, name: 'saravanan'}

console.log(user1.name);

// Type Assertion
let cid: any = 'saravanan'
let customerId = <number>cid;
// customerId = true; // error
console.log(customerId);
console.log(typeof customerId);

let customerId1 = cid as number;

// Functions

function sub(a: number, b: number): number{
    return a - b;
}
console.log(sub(4, 6));

function log(message: string | number): void {
    console.log(message);
}
log('saravanan');
function saravanan(name:string): string {
    return ` i am , ${name}`;
 }
 saravanan('saravanan');
 // function add(a: number, b: number){
 //     return a + b;
 // }
 // console.log(add(4, 6));
 
 // function multiple(a: number, b: number){
 //     return a * b;
 // }
 // console.log(multiple(4, 5));
 
 // async function getfavnum(): Promise<number>{
 //     return 56;
 //     // const number = await fetch('');
 // } 
 // getfavnum()
  
 // const result = add(3, 4);
 // console.log(result);
 
//Interfaces
// this and object also same
interface User1  {
    readonly id: number,
    name: string,
    age?: number
}
const user111: User1 = {
    id: 11, 
    name: 'saravanansivakumar'
}

// user111.id = 111;
console.log(user11);

interface MathFunction {
    (x:number, y: number): number
}

const add: MathFunction = (x:number,y:number):number => x + y
const sub1: MathFunction = (x:number,y:number):number => x - y

// Classes
// class Rectangle{
//     id:number;
//     name:string;
//     constructor(){
//         // this.id = id;
//         // this.name = name;
//         console.log(123)        
//     }
// }
// const saravanan = new Rectangle();

class Rectangle{
        private id:number;
        name:string;
        constructor(id:number, name:string){
            this.id = id;
            this.name = name;
            console.log(123)        
        }
        func() {
            // console.log(`ID: ${this.id}, Name: ${this.name}`)
            return `ID: ${this.id}, Name: ${this.name}`;
        }
    }
const saravanan11 = new Rectangle(1,'SARAVANAN');
// console.log(saravanan11)
// saravanan11.func();
// saravanan11.id = 7;
console.log(saravanan11.func());

class Emp extends Rectangle {
    position: string

    constructor( 
        id:number, 
        name: string, 
        position: string
    ){
      super(id, name)
      this.position = position
    }
}

const emp = new Emp(3, 'saravanansivakumar', 'SDE1: Frontend Developer');
console.log(emp);
console.log(emp.name);
console.log(emp.position);

document.write('saravanan');

// Hi I am Saravan