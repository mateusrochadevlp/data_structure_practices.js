const { defaultToString, ValuePair } = require('./util.js');

module.exports = class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  set(key, value) { 
    if (key != null && value != null) {
    const tabela = this.toStrFn(key);
    this.table[tabela] = new ValuePair(key, value)
    return true;
  }
  return false
 }
 hasKey(key) {
    return this.table[this.toStrFn(key)] != null
 }
 remove(key){
    if (this.hasKey(key)) {
        delete this.table[this.toStrFn(key)]
        return true
  }
 return false;
 }
 get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
 }
 keyValues() {
    return Object.values(this.table);
 }
 keys() {
    return this.keyValues().map(valuePair => valuePair.key)
 }
 values() {
    return this.keyValues().map(valuePair => valuePair.value)
 }
 forEach (callbackFn) {
   const valuePairs = this.keyValues()
   for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
         break;
      }
   }
 }
 size() {
   return this.table(this.keyValues).length
 }
 isEmpty() {
   return this.size() == 0
 }
 clear(){
   this.table = {}
 }
}