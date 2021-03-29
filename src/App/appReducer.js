import { SET_ALL_CURRENCIES } from "./appActions";

const defaultState = {
    allCurrencies: null,
    baseCurrency: 'USD',
};

const apiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ALL_CURRENCIES:
            return { ...state, allCurrencies: action.payload };
        default:
            return state;
    }
};

export default apiReducer;
