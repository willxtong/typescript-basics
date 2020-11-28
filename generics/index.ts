// generics with classes

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfNumbers = new ArrayOfAnything([1, 2, 3]);
const arrayOfStrings = new ArrayOfAnything(['a', 'b', 'c']);

// generics with functions

function printArray<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArray(arrayOfNumbers.collection);
printArray(arrayOfStrings.collection);

// generic constraints

class Car {
  print(): void {
    console.log('I am a car');
  }
}

class House {
  print(): void {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

function printCarsOrHouses<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print(); // assumes every object in arr has a print method, so we need to add a constraint to the generic in the function header
  }
}

printCarsOrHouses([new Car(), new House(), new Car()]);
