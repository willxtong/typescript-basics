const cars = ['ford', 'hyundai']; // don't need the annotation

const alsoCars: string[] = []; // should have the annotation
alsoCars.push('chevy');
// alsoCars.push(5); // TS flags this as an error

const flexibleDates = [new Date(), '2020-10-10']; // flexible types inferred
// flexibleDates.push(100); // TS will still flag this as an error
