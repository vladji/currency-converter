import { createAction } from 'redux-actions';

export const CONVERT_CURRENCIES = 'CONVERT_CURRENCY';
export const CONVERTER_READY = 'CONVERTER_READY';
export const SET_CURRENCY_QUERY_DATA = 'SET_CURRENCY_QUERY_DATA';
export const SET_CONVERTED_VALUE = 'SET_CONVERTED_VALUE';

export const convertCurrencies = createAction(CONVERT_CURRENCIES);
export const converterReady = createAction(CONVERTER_READY, value => value);
export const setCurrencyQueryData = createAction(SET_CURRENCY_QUERY_DATA,
    ({ number = null, fromCurrency = '', toCurrency = '' }) =>
        ({ number, fromCurrency, toCurrency }));
export const setConvertedValue = createAction(SET_CONVERTED_VALUE, value => value);
