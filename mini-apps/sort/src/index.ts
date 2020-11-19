import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';

// const nums = new NumberCollection([0, 10, -1, 5]);
// const sortNums = new Sorter(nums);
// sortNums.sort();
// console.log(nums.data);

const str = new CharacterCollection('XaybaO');
const sortStr = new Sorter(str);
sortStr.sort();
console.log(str.data);
