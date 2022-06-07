import {ICompany} from '../interface/Company';

/**
 * исходное состояние state
 */
const defaultState = {
    companies: []
};

interface IAction {
    type: string;
    payload?: any;
}

/**
 * Константа action-а получения асинхронных данных списка компаний
 */
export const FETCH_COMPANIES = 'FETCH_COMPANIES';

/**
 * Константа action-а добавления компаний
 */
export const SET_COMPANIES = 'SET_COMPANIES';

/**
 * Константа action-а сохранения измененнных данных компании
 */
export const SAVE_COMPANY_DATA = 'SAVE_COMPANY_DATA';

/**
 * Константа action-а получения данных о компаниях
 */
export const GET_COMPANIES = 'GET_COMPANIES';

export const companiesReducer = (state = defaultState, action: IAction) => {
    switch (action.type) {
        case SET_COMPANIES:
            return {
                companies: action.payload
            };
        case SAVE_COMPANY_DATA:
            const saveCompanyIndex = state.companies.findIndex((company: ICompany) => company.ID === action.payload.ID);
            return {
                ...state,
                companies: [
                    ...state.companies.slice(0, saveCompanyIndex),
                    action.payload,
                    ...state.companies.slice(saveCompanyIndex + 1)
                ]
            };
        case GET_COMPANIES:
            return state;
        default:
            return state;
    }
}

/**
 * Функция запуска асинхронного запроса получения данных о компаниях
 * @returns 
 */
export const fetchCompanies = () => ({type: FETCH_COMPANIES});

/**
 * Функция добавления списка компаний в state
 * @param {ICompany[]} payload данные о компаниях
 * @returns 
 */
export const setCompanies = (payload: ICompany[]) => ({type: SET_COMPANIES, payload});

/**
 * Функция сохранения новых данных о компании в state
 * @param {ICompany} payload новые данные о компании
 * @returns 
 */
export const saveCompanyAction = (payload: ICompany) => ({type: SAVE_COMPANY_DATA, payload});

/**
 * Функция получения компаний из state
 * @returns 
 */
export const getCompaniesAction = () => ({type: GET_COMPANIES});