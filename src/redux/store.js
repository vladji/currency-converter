import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
import reducers from "./reducers";

const initStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default initStore;
