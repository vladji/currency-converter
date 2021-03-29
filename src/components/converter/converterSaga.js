import { all, put, select, takeEvery } from 'redux-saga/effects';
import { CONVERT_CURRENCIES, setConvertedValue } from "./converterActions";
import { getCurrencyQueryData } from "./converterSelector";
import { API_KEY, BASE_URL, CONVERT, FROM, TO } from "constants/api";
import { setErrorMessage } from "components/error/erroAction";

function* convertCurrencies () {
    const data = yield select(getCurrencyQueryData);
    const url = `${BASE_URL}${CONVERT}?${FROM}${data.from}&${TO}${data.to}&${API_KEY}`;
    const response = yield fetch(url);
    if (response.ok) {
        const result = yield response.json();
        yield put(setConvertedValue(result.result[data.to] * data.amount));
    } else {
        yield put(setErrorMessage('Please, try again'));
    }
}

export default function* converter () {
    yield all([
        takeEvery(CONVERT_CURRENCIES, convertCurrencies),
    ]);
}