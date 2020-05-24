// should use annotation when var dec & init are on different lines
let oranges: number;
oranges = 5;

// should use annotation when a func returns 'any' type
const parsedJson: number = JSON.parse('5');

// should use annotation when a value has a type that can't be inferred
// (bad code, but done to illustrate)
const nums = [1, 2, 3];
let found: number | boolean = nums.find((num) => num === 4) ? 4 : false;
