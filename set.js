module.exports = class Custom {
  constructor() {
    this.itens = {};
  }
//check that the element or value that the user has submitted is in the object
  has(Element) {
    return this.itens.hasOwnProperty(Element);
  }
  add(Element) {
    if (!this.has(Element)) {
      this.itens[Element] = Element;
      return true;
    }
  }
  remove(Element) {
    if (this.has(Element)) {
      delete this.itens[Element];
      return true;
    }
    return false;
  }
  //clean/ "reset" object 
  clear () {
    this.itens = {};
  }
  //return values of object
  values(){
    return Object.values(this.itens);
  }
  union(otherSet) {
    const unionSet = new Custom();
    let values = this.values();
    for (let i = 0; i < values.length; i++){
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }
};