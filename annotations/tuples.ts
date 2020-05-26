// tuples are basically typed arrays representing data (object substitute)
// but they're not very descriptive, so we won't use them often
// for example, the below Drink tuple represents the color, carbonation, and grams of sugar
// but you wouldn't know that without me telling you
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
