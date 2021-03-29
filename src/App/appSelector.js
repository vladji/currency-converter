export const getAllCurrencies = store => store.app.allCurrencies;
export const getBaseCurrency = store => store.app.baseCurrency;

export const getCurrenciesSymbols = store => {
    const currencies = getAllCurrencies(store);
    if (currencies) {
        return Object.keys(getAllCurrencies(store));
    }
};
