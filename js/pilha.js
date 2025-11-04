module.exports = class Pilha {
    constructor() {
        this.items = []
    }
    //adicionando elemento a pilha
    push(param) {
        this.items.push(param);
    }
    pop() {
        //removendo do topo da pilha
        if (this.isEmpty()) {
            return undefined;
        }
        this.items.pop()
    }
    isEmpty() {
        return this.size() == 0
    }
    size() {
        return this.items.length
    }
}