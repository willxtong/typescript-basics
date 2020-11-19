import { Sorter } from './Sorter';

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    const lowercaseData = this.data.toLowerCase();
    return lowercaseData[leftIndex] > lowercaseData[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const characters = this.data.split('');
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join('');
  }
}
