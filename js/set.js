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
    intersection(otherSet) {
      const intersectionSet = new Custom();
      const values = this.values();
      const otherSetValues = otherSet.values();

      let bigSet = values;
      let smallSet = otherSetValues;
      if (otherSetValues.length > values.length) {
         bigSet = otherSetValues;
         smallSet = values;
      }

      smallSet.forEach(value => {
        if (bigSet.includes(value)) {
          intersectionSet.add(value)
        }
      });
      return intersectionSet;
    }
    diference(otherSet) {
      const diferenceSet = new Custom();
      this.values().forEach(value => {
        if (!otherSet.has(value)) {
          diferenceSet.add(value)
        }
      });
      return diferenceSet();
    }
};