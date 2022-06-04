import {LIST_COMPANY} from '../data/Data';
import Company from './Company';

function ListCompany() {
    return (
        <>
            {LIST_COMPANY.map((company, index) =>
                <Company
                    key={index}
                    {...company}
                />
            )}
        </>
    );
}

export default ListCompany;
