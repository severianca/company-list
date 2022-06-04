import {useParams} from 'react-router-dom';
import {LIST_COMPANY} from '../data/Data';

/**
 * Компонент карточки компании
 * @returns 
 */
function CardCompany() {
    const {id} = useParams();
    return (
      <>
        Компонент карточки {id}
      </>
    );
  }
  
  export default CardCompany;
  