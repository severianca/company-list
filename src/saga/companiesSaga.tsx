import {put, takeEvery} from 'redux-saga/effects';
import {getListCompany} from '../api/API';
import {setCompanies, FETCH_COMPANIES} from '../store/companiesReducer'

/**
 * Функция получает данные с сервера, и добавляет их в state
 */
function* fetchCompanyWorker(): any {
    const data = yield getListCompany();
    yield put(setCompanies(data.data.companies));
}

export function* companyWatcher(): any {
    yield takeEvery(FETCH_COMPANIES, fetchCompanyWorker);
}