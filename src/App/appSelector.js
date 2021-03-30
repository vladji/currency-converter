export const getAllCurrencies = store => store.app.allCurrencies;
export const getBaseCurrency = store => store.app.baseCurrency;

export const getCurrenciesSymbols = store => {
    const currencies = getAllCurrencies(store);
    if (currencies) {
        return Object.keys(currencies).sort();
    }
};

export const getCurrenciesRates = store => {
    const currencies = getAllCurrencies(store);
    if (currencies) {
        const result = Object.entries(currencies);
        return result
            .sort((a, b) => {
                if (a[0] > b[0]) return 1;
                if (a[0] < b[0]) return -1;
                return 0;
            })
            .map(item => [item[0], item[1].toFixed(2)]);
    }
};
