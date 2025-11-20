const Node = require('../models/models-node')

//Criando uma função para verificar igualdade dos valores, mantendo  controle de quais itens já foram adicionados.
const defaultEquals = (a, b) => a === b;

module.exports = class Lista {
    constructor(enqualsFn = defaultEquals) {
        this.enqualsFn = enqualsFn;
        this.count = 0;
        this.head = null;
    }
    push(element) {
        const No = new Node(element)
        if (!this.head) {
            this.head = No;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next
            }
            current.next = No
        }
        this.count++
    }
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let node = this.head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.next
            }
            return node;
        }
        return undefined;
    }
    insertAt(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)

            if (index === 0) {
                const current = this.head;
                node.next = current;
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;

                node.next = current;
                previous.next = node
            }
            this.count++
            return true;
        }
        return false;
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; i < count && current != null; i++) {
            if (this.enqualsFn(element, current.element)) {
                return i;
            }
            current = current.next
        }
        return -1
    }
}