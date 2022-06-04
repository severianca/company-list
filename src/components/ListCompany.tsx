import {LIST_COMPANY} from '../data/Data';
import { Link } from 'react-router-dom';

import './ListCompany.css'

/**
 * Компонент отображает список компаний
 */
function ListCompany() {
    return (
        <>
            <div className="company_title">Компании</div>
            {LIST_COMPANY.map((company, index) =>
                <Link to={`/company/${company.ID}`} key={index} className="company_name">
                    {company.name}
                </Link>
            )}
        </>
    );
}

export default ListCompany;
