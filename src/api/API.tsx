/**
 * Файл предназначен для имитации получения данных
 */

/**
 * Функция имитирует получение данных о компании с помощью axios по ее ID
 * @param {number} idCompany идентификатор компании, данные которой нужно получить 
 * @returns 
 */
export function getCompany(idCompany: number): Promise<any> {
    var axios = require("axios");
    var MockAdapter = require("axios-mock-adapter");

    var mock = new MockAdapter(axios);

    mock.onGet("/company/1").reply(200, {
        company: [
            {
                ID: 1,
                name: 'Компания 1',
                reg_number: 1234567890987,
                reg_date: new Date('2017-01-26').toString(),
                active: true,
                type: 'ИП'
            }
        ],
    });

    mock.onGet("/company/2").reply(200, {
        company: [
            {
                ID: 2,
                name: 'Компания 2',
                reg_number: 1234567896687,
                reg_date: new Date('2016-03-26').toString(),
                active: false,
                type: 'ИП'
            }
        ],
    });

    mock.onGet("/company/3").reply(200, {
        company: [
            {
                ID: 3,
                name: 'Компания 3',
                reg_number: 1233367890987,
                reg_date: new Date('2018-01-21').toString(),
                active: true,
                type: 'ИП'
            }
        ],
    });

    mock.onGet("/company/4").reply(200, {
        company: [
            {
                ID: 4,
                name: 'Компания 4',
                reg_number: 4434567890987,
                reg_date: new Date('2014-01-26').toString(),
                active: false,
                type: "ООО"
            }
        ],
    });

    mock.onGet("/company/5").reply(200, {
        company: [
            {
                ID: 5,
                name: 'Компания 5',
                reg_number: 1234777896687,
                reg_date: new Date('2017-02-11').toString(),
                active: false,
                type: "ООО"
            }
        ],
    });

    mock.onGet("/company/6").reply(200, {
        company: [
            {
                ID: 6,
                name: 'Компания 6',
                reg_number: 1233367890888,
                reg_date: new Date('2014-01-28').toString(),
                active: false,
                type: "ООО"
            }
        ],
    });

    return axios.get(`/company/${idCompany}`);
}

/**
 * Функция имитирует получение списка компаний с помощью axios
 * @returns 
 */
 export function getListCompany(): Promise<any> {
    var axios = require("axios");
    var MockAdapter = require("axios-mock-adapter");

    var mock = new MockAdapter(axios);

    mock.onGet("/").reply(200, {
        companies: [
            {
                ID: 1,
                name: 'Компания 1'
            },
            {
                ID: 2,
                name: 'Компания 2'
            },
            {
                ID: 3,
                name: 'Компания 3'
            },
            {
                ID: 4,
                name: 'Компания 4'
            },
            {
                ID: 5,
                name: 'Компания 5'
            },
            {
                ID: 6,
                name: 'Компания 6'
            }
        ],
    });

    return axios.get("/");
}