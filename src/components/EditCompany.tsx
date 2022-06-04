import {useParams} from 'react-router-dom';

/**
 * Компонент редатирования компании
 */
function EditCompany() {
    const {id} = useParams();
    return (
      <>
        Редактирование {id}
      </>
    );
  }
  
  export default EditCompany;
  