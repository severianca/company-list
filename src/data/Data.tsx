type TType = 'ИП' | 'ООО';

/**
 * Интерфейс данных о компании
 */
export interface ICompany {
    /**
     * {number} Идентификатор компании
     */
    ID: number;
    /**
     * {string} Наименование компании
     */
    name: string;
    /**
     * {number} ОГРН (Основной государственный регистрационный номер)
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
     * {TType} Тип копании
     */
    type: TType;
}

/**
 * Список компаний.
 * Имитация пришедших данных
 */
export const LIST_COMPANY: ICompany[] = [
    {
        ID: 1,
        name: 'Компания 1',
        reg_number: 1234567890987,
        reg_date: new Date('2017-01-26').toString(),
        active: true,
        type: 'ИП'
    },
    {
        ID: 2,
        name: 'Компания 2',
        reg_number: 1234567896687,
        reg_date: new Date('2016-03-26').toString(),
        active: false,
        type: 'ИП'
    },
    {
        ID: 3,
        name: 'Компания 3',
        reg_number: 1233367890987,
        reg_date: new Date('2018-01-21').toString(),
        active: true,
        type: 'ИП'
    },
    {
        ID: 4,
        name: 'Компания 4',
        reg_number: 4434567890987,
        reg_date: new Date('2014-01-26').toString(),
        active: false,
        type: "ООО"
    },
    {
        ID: 5,
        name: 'Компания 5',
        reg_number: 1234777896687,
        reg_date: new Date('2017-02-11').toString(),
        active: false,
        type: "ООО"
    },
    {
        ID: 6,
        name: 'Компания 6',
        reg_number: 1233367890888,
        reg_date: new Date('2014-01-28').toString(),
        active: false,
        type: "ООО"
    }
];