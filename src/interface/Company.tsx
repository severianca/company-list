/**
 * Тип компании
 */
 type TTypeCompany = 'ООО' | 'ИП';

 /**
  * интерфей данных о компании
  */
 export interface ICompany {
     ID: number;
     name: string;
     reg_number: number;
     reg_date: string;
     active: boolean;
     type: TTypeCompany;
 }