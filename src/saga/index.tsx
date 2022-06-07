import {all} from 'redux-saga/effects';
import {companyWatcher} from '../saga/companiesSaga';

export function* rootWatcher(): any {
    yield all([companyWatcher()]);
}