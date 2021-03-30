import { createAction } from 'redux-actions';

export const API_GET_ALL_CURRENCIES = 'API_GET_ALL_CURRENCIES';
export const SET_ALL_CURRENCIES = 'SET_ALL_CURRENCIES';
export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';

export const apiGetAllCurrencies = createAction(API_GET_ALL_CURRENCIES);
export const setAllCurrencies = createAction(SET_ALL_CURRENCIES, currencies => currencies);
export const setBaseCurrency = createAction(SET_BASE_CURRENCY, value => value);
