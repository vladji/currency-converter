import { combineReducers } from 'redux';
import apiReducer from "App/appReducer";
import converterReducer from "components/converter/converterReducers";
import errorReducer from "components/error/errorReducer";

const reducers = {
    app: apiReducer,
    converter: converterReducer,
    error: errorReducer,
};

export default combineReducers(reducers);
