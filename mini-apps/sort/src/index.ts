import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// const nums = new NumberCollection([0, 10, -1, 5]);
// const sortNums = new Sorter(nums);
// sortNums.sort();
// console.log(nums.data);

// const str = new CharacterCollection('XaybaO');
// const sortStr = new Sorter(str);
// sortStr.sort();
// console.log(str.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(3);
linkedList.add(8);
linkedList.add(-1);
const sortLL = new Sorter(linkedList);
sortLL.sort();
linkedList.print();
