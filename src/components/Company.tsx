import {ICompany} from '../data/Data';
import './Company.css';

/**
 * Компонент сокращенных данных о компании для отображения в списке
 * @returns 
 */
function Company(props: ICompany) {
    return (
      <div className="company_wrap">
        <div>ID: {props.ID}</div>
        <div>Имя: {props.name}</div>
        <div>ОГРН: {props.reg_number}</div>
        <div>Тип компании: {props.type}</div>
        <div>Дата регистрации: {props.reg_date}</div>
        <div>Активена: {props.active ? 'да' : 'нет' }</div>
      </div>
    );
  }
  
  export default Company;
  