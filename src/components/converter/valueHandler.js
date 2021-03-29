const dataChecker = ({ number, from, to }, currenciesSymbols, setCurrencyQueryData) => {
    const invalidNumber = isNaN(number);
    const fromCurrency = from.toUpperCase();
    const toCurrency = to.toUpperCase();
    const checkFrom = currenciesSymbols[fromCurrency];
    const checkTo = currenciesSymbols[toCurrency];
    if (!invalidNumber && checkFrom && checkTo) {
        setCurrencyQueryData({ number, fromCurrency, toCurrency });
        return true;
    } else {
        return false;
    }
};

const valueDataParser = (value, currenciesSymbols, setCurrencyQueryData) => {
    let isReady = false;
    const valueData = value.split(' ');
    const number = valueData[0];
    const from = valueData[1];
    if (valueData.length > 2 && from.length === 3) {
        const to = valueData[valueData.length - 1];
        if (to.length === 3) {
            isReady = dataChecker({ number, from, to }, currenciesSymbols, setCurrencyQueryData);
        }
    }
    return isReady;
};

export const valueHandler = (e, converterReady, currenciesSymbols, setCurrencyQueryData) => {
    let isReady;
    const source = e.target.value;
    if (source) {
        const value = source.replace(/\s+/g, ' ').trim();
        if (value) {
            isReady = valueDataParser(value, currenciesSymbols, setCurrencyQueryData);
        }
    }
    if (isReady !== undefined) {
        converterReady(isReady);
    }
};