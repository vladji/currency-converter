import { ERROR_MESSAGE } from "./erroAction";

const defaultState = {
    errorMessage: null,
};

const errorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ERROR_MESSAGE:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
};

export default errorReducer;
