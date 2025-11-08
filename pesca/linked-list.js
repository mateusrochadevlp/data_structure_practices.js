const Node = require("./linked-list-models.js");

function defaultEquals(a, b) {
    return a === b;
}

module.exports = class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0;
        this.head = null;
    }

    push(element) {
        const node = new Node(element);
        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    getElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }
};
