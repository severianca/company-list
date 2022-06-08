import {useParams} from 'react-router-dom';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from "react-datepicker";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {saveCompanyAction, getCompaniesAction} from '../store/companiesReducer';
import {useEffect} from 'react';
import {ICompany} from '../interface/Company';
import React from 'react';
import ReactDOM from 'react-dom';

import "react-datepicker/dist/react-datepicker.css";
import './EditCompany.css';

/**
 * Компонент редатирования компании
 */
function EditCompany() {
    /**
     * Идентификатор компании, карточку которой открыли
     */
    const {id} = useParams();
    
    /**
     * Функция для управления навигацией
     */
    const navigate = useNavigate();

    /**
     * Список всех компаний
     */
    const companies = useSelector((state: any) => state.companiesReducer.companies);
    const dispatch = useDispatch();

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        control
    } = useForm();

    /**
     * Получае данные о компаниях
     */
    useEffect(() => {
        dispatch(getCompaniesAction());
    }, []);

    /**
     * Сохраняет данные с формы в store и переходит на страницу карточки
     * @param data данные на форме
     */
    const onSubmit = (data:any) => {
        dispatch(saveCompanyAction({...data, ID: Number(id)}));
        navigate(`/company/${id}`, { replace: true })
    }

    return (
        <>
            {companies.length > 0
                ?
                companies.filter((company: ICompany) => company.ID === Number(id)).map((company: ICompany) => 
                    <>
                        <form onSubmit={handleSubmit(onSubmit)} className="wrap_form">
                            <section>
                                <label>Наименование компании</label>
                                <div className="form_error">
                                    <input defaultValue={company.name} {...register("name", { required: true})}/>
                                    <div className="form_error-message">{errors?.name && <div>Поле обязательно к заполнению</div>}</div>
                                </div>
                            </section>
                            <section>
                                <label>ОГРН</label>
                                <div className="form_error">
                                    <input defaultValue={company.reg_number} {...register("reg_number", { required: true})}/>
                                    <div className="form_error-message">{errors?.reg_number && <div>Поле обязательно к заполнению</div>}</div>
                                </div>
                            </section>
                            <section>
                                <label>Тип компании</label>
                                <select {...register("type")} defaultValue={company.type}>
                                    <option value="ООО">ООО</option>
                                    <option value="ИП">ИП</option>
                                </select>
                            </section>
                            <section>
                                <label>Дата регистрации</label>
                                <Controller
                                    control={control}
                                    name="reg_date"
                                    defaultValue={new Date(company.reg_date)}
                                    render={({ field }) => (
                                        <DatePicker
                                            onChange={(e) => field.onChange(e)}
                                            selected={field.value}
                                        />
                                    )}
                                />
                            </section>
                            <section>
                                <label>Активность</label>
                                <Controller
                                    name="active"
                                    control={control}
                                    defaultValue={company.active}
                                    render={({ field }) => (
                                        <input
                                            type="checkbox"
                                            onChange={(e) => field.onChange(e.target.checked)}
                                            checked={field.value}
                                        />
                                    )}
                                />
                            </section>
                            <input type="submit" className="form_submit"/>
                        </form>
                    </>
                )
                :
                <div>Данные для редактирования копании не получены</div>
            }
        </>
    );
}

export default EditCompany;
  