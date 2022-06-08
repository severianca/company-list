/**
 * Функция имитирует получение списка компаний с помощью axios
 * @returns 
 */
 export function getListCompany(): any {
    var axios = require("axios");
    var MockAdapter = require("axios-mock-adapter");

    var mock = new MockAdapter(axios);

    mock.onGet("/").reply(200, {
        companies: [
            {
                ID: 1,
                name: 'Компания 1',
                reg_number: 1234567890987,
                reg_date: new Date('2017-01-26'),
                active: true,
                type: 'ИП'
            },
            {
                ID: 2,
                name: 'Компания 2',
                reg_number: 1234567896687,
                reg_date: new Date('2016-03-26'),
                active: false,
                type: 'ИП'
            },
            {
                ID: 3,
                name: 'Компания 3',
                reg_number: 1233367890987,
                reg_date: new Date('2018-01-21'),
                active: true,
                type: 'ИП'
            },
            {
                ID: 4,
                name: 'Компания 4',
                reg_number: 4434567890987,
                reg_date: new Date('2014-01-26'),
                active: false,
                type: "ООО"
            },
            {
                ID: 5,
                name: 'Компания 5',
                reg_number: 1234777896687,
                reg_date: new Date('2017-02-11'),
                active: false,
                type: "ООО"
            },
            {
                ID: 6,
                name: 'Компания 6',
                reg_number: 1233367890888,
                reg_date: new Date('2014-01-28'),
                active: false,
                type: "ООО"
            }
        ],
    });

    return axios.get("/");
}