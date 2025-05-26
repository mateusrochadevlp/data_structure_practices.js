// Classe Queue
module.exports = class Queue {
  constructor() {
    this.itens = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue(element) {
    this.itens[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.itens[this.lowestCount];
    delete this.itens[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }
}