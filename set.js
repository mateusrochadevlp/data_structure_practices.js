module.exports = class Univ {
    constructor() {
        this.itens = {}
    }
    has(element) {
        return this.itens.hasOwnProperty(element);
    }
    add(element) {
        if (!this.iens.hasOwnProperty(element)) {
            return this.itens[element] = element
        }
        return false
    }
    delete(element) {
        if (this.has(element)) {
            delete this.itens[element];
            return true;
        }
        return false
    }
    clear() {
        this.itens = {}
    }
}