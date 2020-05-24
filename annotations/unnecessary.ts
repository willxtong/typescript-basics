// all of the below annotations are unnecessary bc of type inference

// primitive type annotations
const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothing: null = null;
const alsoNothing: undefined = undefined;

// arrays
const colors: string[] = ['red', 'green', 'blue'];
const numbers: number[] = [1, 2, 3];

// built-in classes
const now: Date = new Date();

// custom classes
class Car {}
const car: Car = new Car();

// object literal (kinda gross)
const point: { x: number; y: number } = { x: 10, y: 20 };

// function (super gross)
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
