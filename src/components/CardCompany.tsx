import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCompany } from '../api/API';
import { Link } from 'react-router-dom';

import './CardCompany.css';

/**
 * Компонент карточки компании
 * @returns 
 */
function CardCompany() {
    const {id} = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        getCompany(Number(id)).then((response: any) => {
            setCompany(response.data.company[0]);
        });
    }, []);

    return (
        <>
            {company && (
                <>
                    <p>Наименование компании: {company['name']}</p>
                    <p>ОГРН: {company['reg_number']}</p>
                    <p>Тип компании: {company['type']}</p>
                    <p>Дата регистрации: {company['reg_date']}</p>
                    <p>Активность: {company['active'] ? 'зафиксирована' : 'отсуствует'}</p>
                    <Link to={`/company/edit/${company['ID']}`} className="card_edit">
                        <button className="card_edit-button">Редактировать</button>
                    </Link>
                </>
            )}
        </>
    );
}

export default CardCompany;
  