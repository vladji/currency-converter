import { createAction } from 'redux-actions';

export const API_GET_ALL_CURRENCIES = 'API_GET_ALL_CURRENCIES';
export const SET_ALL_CURRENCIES = 'SET_ALL_CURRENCIES';

export const apiGetAllCurrencies = createAction(API_GET_ALL_CURRENCIES);
export const setAllCurrencies = createAction(SET_ALL_CURRENCIES, currencies => currencies);
