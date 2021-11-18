// 链表

class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new LinkedNode(value);
    node.next = null;
    this.length = 0;
    if (this.value) {
      this.length = 1;
    }
    this.head = node;
    this.tail = node;
  }

  push(value) {
    const node = new LinkedNode(value);
    const current = this.head;
  }

}