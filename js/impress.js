const Deque = require("./deque");

class Impressora {
  constructor() {
    this.filaItens = new Deque();
  }
  normal(lista) {
    if (this.filaItens.isEmpty()) {
      this.filaItens.addBack(lista);
      console.log(`fila vazia, adicionando ${lista} como 1 da fila`);
    }
    this.filaItens.addBack(lista);
    console.log(`adicionado ${lista} a fila`);
  }
  prioridade(lista) {
    this.filaItens.addFront(lista);
    console.log(`adicionado ${lista} com prioridade`);
  }
  frente() {
    return this.filaItens.peekFront();
  }
}
const imp = new Impressora();
console.log(imp.normal("comp1"));
console.log(imp.normal("comp2"));
console.log(imp.prioridade("comp3"));
console.log(imp.frente());
