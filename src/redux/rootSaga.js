import { all, fork, } from 'redux-saga/effects';
import converter from 'components/converter/converterSaga';
import appSaga from "App/appSaga";

export default function* rootSaga () {
    yield all([
        fork(converter),
        fork(appSaga),
    ]);
}
