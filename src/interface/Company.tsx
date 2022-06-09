/**
 * Тип компании
 */
 type TTypeCompany = 'ООО' | 'ИП';

 /**
  * интерфейc данных о компании
  */
 export interface ICompany {
    /**
     * {number} Идентификтор компании
     */
    ID: number;
    /**
     * {string} Наименование компании
     */
    name: string;
    /**
     * {number} ОГРН
     */
    reg_number: number;
    /**
     * {string} Дата регистрации
     */
    reg_date: string;
    /**
     * {boolean} Флаг активности
     */
    active: boolean;
    /**
     * {TTypeCompany} Тип компании
     */
    type: TTypeCompany;
 }