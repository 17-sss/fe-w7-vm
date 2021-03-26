class Currency  {
    constructor(type, count) {
        this.type = type;
        this.count = count;
    }

    getCurrencyCount = (data, currencyType) => data.find((value) => value.type === currencyType);
    setCurrencyCount = (count) => (this.count = count);
}
// new Currency(10000, 5);
export default Currency;

