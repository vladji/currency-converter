import { all, put, select, takeEvery } from 'redux-saga/effects';
import { API_GET_ALL_CURRENCIES, SET_BASE_CURRENCY, setAllCurrencies } from "./appActions";
import { getBaseCurrency } from "./appSelector";
import { setErrorMessage } from "components/error/erroAction";
import { BASE_URL, FROM, LATEST } from "../constants/api";

function* getCurrencies () {
    const baseCurrency = yield select(getBaseCurrency);
    const url = `${BASE_URL}${LATEST}?${FROM}${baseCurrency}`;
    const response = yield fetch(url);
    if (response.ok) {
        const result = yield response.json();
        yield put(setAllCurrencies(result.rates));
    } else {
        yield put(setErrorMessage('...ups'));
    }
}

export default function* appSaga () {
    yield all([
        takeEvery(API_GET_ALL_CURRENCIES, getCurrencies),
        takeEvery(SET_BASE_CURRENCY, getCurrencies),
    ]);
}
