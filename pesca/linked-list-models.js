module.exports = class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

const defaultEquals  = (a, b) => a === b;
console.log(defaultEquals(1, 2))