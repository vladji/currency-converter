import { SET_ALL_CURRENCIES, SET_BASE_CURRENCY } from "./appActions";

const defaultState = {
    allCurrencies: null,
    baseCurrency: 'USD',
};

const apiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ALL_CURRENCIES:
            return { ...state, allCurrencies: action.payload };
        case SET_BASE_CURRENCY:
            return { ...state, baseCurrency: action.payload };
        default:
            return state;
    }
};

export default apiReducer;
