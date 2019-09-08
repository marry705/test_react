import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import _store from './store/store';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchServer } from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(_store, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchServer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
