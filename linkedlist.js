const Node = require('./models-node')

//Criando uma função para verificar igualdade dos valores, mantendo  controle de quais itens já foram adicionados.
const defaultEquals  = (a, b) => a === b;

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
}