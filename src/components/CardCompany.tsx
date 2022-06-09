import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getCompaniesAction} from '../store/companiesReducer';
import {ICompany} from '../interface/Company';
import React from 'react';
import ReactDOM from 'react-dom';

import './CardCompany.css';

/**
 * Данные отсутствуют
 */
const EMPTY_DATA: string = '-';

/**
 * Компонент карточки компании
 * @returns 
 */
function CardCompany() {
    /**
     * Идентификатор компании, карточку которой открыли
     */
    const {id} = useParams();

    /**
     * Данные о компаниях из store
     */
    const companies = useSelector((state: any) => state.companiesReducer.companies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompaniesAction());
    }, []);

    return (
        <>
            {companies.length > 0
                ?
                companies.filter((company: ICompany) => company.ID === Number(id)).map((company: ICompany) => 
                    <>
                        <p>Наименование компании: {company.name}</p>
                        <p>ОГРН: {company.reg_number}</p>
                        <p>Тип компании: {company.type}</p>
                        <p>Дата регистрации: {company.reg_date ? company.reg_date.toString() : EMPTY_DATA}</p>
                        <p>Активность: {company.active ? 'зафиксирована' : 'отсуствует'}</p>
                        <Link to={`/company/edit/${company.ID}`} className="card_edit">
                            <button className="card_edit-button">Редактировать</button>
                        </Link>
                    </>
                )
                :
                <div>Данные компании не получены</div>
            }
        </>
    );
}

export default CardCompany;