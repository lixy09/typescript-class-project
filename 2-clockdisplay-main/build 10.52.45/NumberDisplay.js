export default class NumberDisplay {
    value;
    limit;
    constructor(limit) {
        this.value = 0;
        this.limit = limit;
    }
    increment() {
        this.value += 1;
        if (this.value === this.limit)
            this.value = 0;
    }
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
//# sourceMappingURL=NumberDisplay.js.map