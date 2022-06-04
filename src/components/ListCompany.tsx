import { Link } from 'react-router-dom';
import { getListCompany } from '../api/API';
import { useEffect, useState } from 'react';

import './ListCompany.css'

/**
 * Компонент отображает список компаний
 */
function ListCompany() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getListCompany().then((response: any) => {
            setCompanies(response.data.companies);
        });
    }, []);

    return (
        <>
            <h1>Компании</h1>
            {companies && companies.map((company) =>
                <Link to={`/company/${company['ID']}`} key={company['ID']} className="company_name">
                    {company['name']}
                </Link>
            )}
        </>
    );
}

export default ListCompany;
