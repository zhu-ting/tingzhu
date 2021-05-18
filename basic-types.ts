let isDone: boolean = false;

let month: number = 5;
let binaryNumber: number = 0b111;

let firstName: string = "May";
let message: string = `Hello ${firstName} on the ${month}th month`;

let u: undefined = undefined;
let n: null = null;

let num: number = undefined; // undefined and null are the subset of all

let anonymous: any = 4;
anonymous = 'maybe is a string';
anonymous = true;
anonymous.name;
anonymous.getName();

let numberOrString: number | string = 123;
numberOrString = 'abc';
// numberOrString = false;  // wrong

let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

function test() {
    console.log(arguments);
}

// tuple (a data structure consisting of multiple parts)
let user: [string, number] = ["May", 5];
