import { Sortable } from './Sortable';

export class CharacterCollection implements Sortable {
  constructor(public data: string) {}
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
