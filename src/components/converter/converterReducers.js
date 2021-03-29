import {
    CONVERTER_READY,
    SET_CONVERTED_VALUE,
    SET_CURRENCY_QUERY_DATA
} from "./converterActions";

const defaultState = {
    number: null,
    fromCurrency: '',
    toCurrency: '',
    isReady: false,
    convertedValue: null,
};

const converterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CONVERTER_READY:
            return { ...state, isReady: action.payload };
        case SET_CURRENCY_QUERY_DATA:
            return { ...state, ...action.payload };
        case SET_CONVERTED_VALUE:
            return { ...state, convertedValue: action.payload };
        default:
            return state;
    }
};

export default converterReducer;
