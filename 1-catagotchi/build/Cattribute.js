export default class Cattribute {
    value;
    constructor(initialValue) {
        this.value = initialValue;
    }
    increase(by) {
        this.value += by;
    }
    decrease(by) {
        this.value -= by;
    }
    getValue() {
        return this.value;
    }
}
//# sourceMappingURL=Cattribute.js.map