import {applyMiddleware, combineReducers, createStore} from 'redux';
import {companiesReducer} from './companiesReducer';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from '../saga/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    companiesReducer: companiesReducer 
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootWatcher);