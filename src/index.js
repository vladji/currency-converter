import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from "./redux/store";
import App from './App/App';

import './styles/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={initStore()}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
