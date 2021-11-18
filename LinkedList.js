/** 
 * 双向链表
 */
class Node {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(...params) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (params) {
      this.initialList(params);
    }
  }

  initialList(params) {
    const array = params.flat(2).map(item => new Node(item));
    array.forEach((node, index) => {
      if (index === 0) {
        this.head = node;
      } else if (index === array.length - 1) {
        this.tail = node;
        this.tail.prev = array[index - 1];
        array[index - 1].next = node;
      } else {
        array[index - 1].next = node;
        node.prev = array[index - 1];
      }
    });
    this.length = array.length;
  }
  // 向链表中添加元素
  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
  }
  // 合并两个链表
  pushWithList(list) {
    const newList = new LinkedList();
    let head1 = this.head;
    let head2 = list.head;
    while (head1 && head2) {
      if (head1.value <= head2.value) {
        newList.push(head1.value);
        head1 = head1.next;
      } else {
        newList.push(head2.value);
        head2 = head2.next;
      }
    }
    newList.length = list.length + this.length;
    return newList;
  }
  // 向链表指定位置插入元素
  insert(position, val) {
    if (position <0 || position > this.length) return false;
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      if (position === 0) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      } else if (position === this.length) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        // 插入到中间了
        const current = this.getNodeWithIndex(position);
        node.next = current;
        node.prev = current.prev;
        current.prev.next = node;
        current.prev = node;
      }
    }
    this.length += 1;
    return true;
  }
  getNode(position) {
    if (position < 0 || position > this.length) return null;
    return this.getNodeWithIndex(position).value;
  }

  indexOf(val) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.value === val) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  unique() {
    let current = this.head;
    while (current && current.next) {
      if (current.value === current.next.value) {
        current.next = current.next.next;
        this.length -= 1;
      } else {
        current = current.next;
      }
    }
    return this;
  }

  removeAt(position) {
    if (position < 0 || position > this.length) return null;
    
    let current = null;
    if (this.length - 1) {
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        current = this.getNodeWithIndex(position);
        current.next.prev = current.prev;
        current.prev.next = current.next;
      }
    }
    this.length -= 1;
    return current.value;
  }

  getNodeWithIndex(position) {
    let current = null;
    if (Math.ceil(this.length / 2) > position) {
      current = this.head;
      let i = 0;
      while (i++ < position) {
        current = current.next;
      }
    } else {
      current = this.tail;
      let i = this.length - 1;
      while (i-- > position) {
        current = current.prev;
      }
    }
    return current;
  }
}