import { combineReducers } from 'redux';
import converterReducer from "components/converter/converterReducers";
import errorReducer from "components/error/errorReducer";

const reducers = {
    converter: converterReducer,
    error: errorReducer,
};

export default combineReducers(reducers);
