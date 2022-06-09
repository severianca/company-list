import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCompanies} from '../store/companiesReducer';
import {ICompany} from '../interface/Company';
import React from 'react';
import ReactDOM from 'react-dom';

import './ListCompany.css'

/**
 * Компонент отображает список компаний
 */
function ListCompany() {
    /**
     * Данные о всех компаниях из store
     */
    const companies = useSelector((state: any) => state.companiesReducer.companies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCompanies());
    }, []);

    return (
        <>
            <h1>Компании</h1>
            {companies && companies.map((company: ICompany) =>
                <Link to={`/company/${company.ID}`} key={company.ID} className="company_name">
                    {company.name}
                </Link>
            )}
        </>
    );
}

export default ListCompany;
