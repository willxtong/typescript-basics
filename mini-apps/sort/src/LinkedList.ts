import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  tail: Node | null = null;
  length: number = 0;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else if (this.tail) {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }

  at(index: number): Node {
    if (!this.head) throw new Error('Index out of bounds');
    let count = 0;
    let curr: Node | null = this.head;
    while (curr) {
      if (count === index) return curr;
      count++;
      curr = curr.next;
    }
    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) throw new Error('List is empty');
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    if (!this.head) throw new Error('List is empty');

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftData = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftData;
  }

  print(): void {
    if (!this.head) return;
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
