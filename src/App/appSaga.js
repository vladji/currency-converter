import { put, takeEvery } from 'redux-saga/effects';
import { setCurrenciesSymbols } from "components/converter/converterActions";
import { API_GET_CURRENCIES_SYMBOLS } from "./appActions";
import {API_KEY, BASE_URL, CURRENCIES} from "../constants/api";

function* getSymbols () {
    const url = `${BASE_URL}${CURRENCIES}?${API_KEY}`;
    const response = yield fetch(url);
    const result = yield response.json();
    yield put(setCurrenciesSymbols(result.currencies));
}

export default function* appSaga () {
    yield takeEvery(API_GET_CURRENCIES_SYMBOLS, getSymbols);
}
