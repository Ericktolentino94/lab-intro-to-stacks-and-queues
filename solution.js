const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data, this.top);
    this.top = newNode;
  }

  size() {
    let count = 0;
    let current = this.top;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  pop() {
    if (this.top === null) {
      return;
    }
    let currentTop = this.top;
    this.top = currentTop.next;

    return currentTop;
  }

  isEmpty() {
    return this.top === null;
  }

  findMin() {
    if (this.isEmpty()) {
      return null;
    }

    let current = this.top;
    let min = current.data;
    while (current) {
      if (current.data < min) {
        min = current.data;
      }
      current = current.next;
    }
    return min;
  }

  peek() {
    return this.top;
  }

  sort(){
    let flag = false;
    while(!flag){
      let current = this.top;
      flag = true;
      while(current.next && current){
        if(current.data > current.next.data){  
          let temp = current.data;
          current.data = current.next.data;
          current.next.data = temp;
          flag = false;
        }
        current = current.next;
      }
    }  
  }
  
  
  
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxValue = null;
  }

  count() {
    return this.size;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
      this.maxValue = data;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      if (data > this.maxValue) {
        this.maxValue = data;
      }
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const dequeuedData = this.first.data;
    this.first = this.first.next;
    this.size--;

    if (this.isEmpty()) {
      this.last = null;
      this.maxValue = null;
    }

    return dequeuedData;
  }

  findMax() {
    return this.maxValue;
  }

  getLast() {
    return this.last;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.first;
}
}

module.exports = {
  Node,
  Queue,
  Stack,
};