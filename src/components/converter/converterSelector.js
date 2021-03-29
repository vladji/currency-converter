export const getConvertReady = store => store.converter.isReady;
export const getConvertedValue = store => store.converter.convertedValue;

export const getCurrencyQueryData = (store) => {
    return {
        amount: store.converter.number,
        from: store.converter.fromCurrency,
        to: store.converter.toCurrency,
    };
};
