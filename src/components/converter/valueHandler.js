const dataChecker = ({ number, from, to }, allCurrencies, setCurrencyQueryData) => {
    const invalidNumber = isNaN(number);
    const fromCurrency = from.toUpperCase();
    const toCurrency = to.toUpperCase();
    const checkFrom = allCurrencies[fromCurrency];
    const checkTo = allCurrencies[toCurrency];
    if (!invalidNumber && checkFrom && checkTo) {
        setCurrencyQueryData({ number, fromCurrency, toCurrency });
        return true;
    } else {
        return false;
    }
};

const valueDataParser = (value, allCurrencies, setCurrencyQueryData) => {
    let isReady = false;
    const valueData = value.split(' ');
    const number = valueData[0];
    const from = valueData[1];
    if (valueData.length > 2 && from.length === 3) {
        const to = valueData[valueData.length - 1];
        if (to.length === 3) {
            isReady = dataChecker({ number, from, to }, allCurrencies, setCurrencyQueryData);
        }
    }
    return isReady;
};

export const valueHandler = (e, converterReady, allCurrencies, setCurrencyQueryData) => {
    let isReady;
    const source = e.target.value;
    if (source) {
        const value = source.replace(/\s+/g, ' ').trim();
        if (value) {
            isReady = valueDataParser(value, allCurrencies, setCurrencyQueryData);
        }
    }
    if (isReady !== undefined) {
        converterReady(isReady);
    }
};
