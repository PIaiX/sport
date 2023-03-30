import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import {RiCloseLine} from "react-icons/ri";
import {useController, useForm} from 'react-hook-form'
import {useAppSelector} from "../../store";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {SelectToEndForPhoneInput} from "../../helpers/SelectToEndForPhoneInput";
import {useDispatch} from "react-redux";
import {editMe} from "../../store/slices/user/actions";
import useAnchor from "../../hooks/useAnchor";
import {onImageHandler} from "../../helpers/onImageHandler";
import {useImageViewer} from '../../hooks/imageViewer'

const sexList = [
    {value: true, label: 'Мужской'},
    {value: false, label: 'Женский'},
];
const daysList = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
];
const monthsList = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
];
const yearsList = [
    {value: '2001', label: '2001'},
    {value: '2002', label: '2002'},
    {value: '2003', label: '2003'},
];

const Profile = () => {
    const {handleSubmit, register, formState: {errors}, setValue, clearErrors, getValues, control} = useForm()
    const {user} = useAppSelector(state => state.user)
    const dispatch = useDispatch()
    const { field: { value: genderValue, onChange: genderOnChange, ...genderField } } = useController({ name: 'gender', control, rules:{required:'Выберите значение'} });
    const [myRef, executeScroll] = useAnchor()
    const [file, setFile] = useState()
    const [avatar, setAvatar] = useState(null)
    let photo = useImageViewer(avatar?.image)

    const SubmitUserClick = ({password, gender, ...data}) => {
        let req = {...data, gender:gender.value===true?true:false}
        const formData = new FormData()
        for (const key in req) {
            formData.append(key, req[key])
        }
        formData.append('image', file, '2we.jpg')
        dispatch(editMe(formData))
        executeScroll()
    }


    useEffect(() => {
        setValue('firstName', user?.firstName)
        setValue('lastName', user?.lastName)
        setValue('patronymic', user?.patronymic)
        setValue('email', user?.email)
        setValue('phone', user?.phone)
        setValue('address', user?.address)
        setValue('city', user?.city)
        setValue('district', user?.district)
        setValue('region', user?.region)
        setValue('weight', user?.weight)
        setValue('height', user?.height)
        setValue('isPublicProfile', !user?.isPublicProfile)
        setValue('gender',
            user?.gender!==null?
                sexList[user?.gender==true?0:1]
                : null
        )
    }, [user])

    return (
        <section className='account-box' ref={myRef}>
            <h1>Личные данные</h1>
            <form onSubmit={handleSubmit(SubmitUserClick)}>
                <Row className={'mb-3'}>
                    <img className={'col-sm-8 col-md-6 col-xl-5 img-profile'}
                         src={avatar?photo?.data_url:'../imgs/userDontFind.jpg'} />
                    <div className={'d-flex gap-2 mt-2'}>
                        <div className="file-upload">
                            <button className="btn-4">Загрузить фото</button>
                            <input type="file" onChange={(e) => {
                                setFile(e.target.files[0])
                                onImageHandler(e, setAvatar)
                            }} />
                        </div>
                        <input type={'button'} className={'btn-5'} value={'Удалить фото'}/>
                    </div>
                </Row>
                <Row className='gx-4 gx-xxl-5'>
                    <Col md={6}>
                        <fieldset>
                            <legend className='mb-0'>Основная информация</legend>
                            <Row className='gx-4 gy-2 gy-sm-3 align-items-center'>
                                <Col md={3}>
                                    Имя
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.firstName}>
                                        <input className='mb-3' type="text" placeholder='Имя'
                                               {...register('firstName', {
                                                   required: 'Поле обязательно к заполнению',
                                                   minLength: {value: 2, message: 'Минимум 2 символа'},
                                                   pattern: {
                                                       value: /^[A-Za-z-А-Яа-я]+$/i,
                                                       message: "Для ввода допускаются только буквы"
                                                   },
                                                   maxLength: {value: 50, message: 'Максимум 50 символов',},
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col md={3}>
                                    Фамилия
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.lastName}>
                                        <input className='mb-3' type="text" placeholder='Фамилия'
                                               {...register('lastName', {
                                                   required: 'Поле обязательно к заполнению',
                                                   minLength: {value: 2, message: 'Минимум 2 символа'},
                                                   pattern: {
                                                       value: /^[A-Za-z-А-Яа-я]+$/i,
                                                       message: "Для ввода допускаются только буквы"
                                                   },
                                                   maxLength: {value: 50, message: 'Максимум 50 символов',},
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col md={3}>
                                    Отчество
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.patronymic}>
                                        <input className='mb-3' type="text" placeholder='Отчество'
                                               {...register('patronymic',
                                               //     {
                                               //     required: 'Поле обязательно к заполнению',
                                               //     minLength: {value: 2, message: 'Минимум 2 символа'},
                                               //     pattern: {
                                               //         value: /^[A-Za-z-А-Яа-я]+$/i,
                                               //         message: "Для ввода допускаются только буквы"
                                               //     },
                                               //     maxLength: {value: 50, message: 'Максимум 50 символов',},
                                               // }
                                               )}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col md={3}>
                                    Пол
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.gender}>
                                        <Select
                                            name="gender"
                                            placeholder="Пол"
                                            classNamePrefix="simple-select"
                                            value={genderValue}
                                            onChange={option => genderOnChange(option)}
                                            className="simple-select-container borderless w-100 validate-select"
                                            options={sexList}
                                            {...genderField}
                                        />
                                    </ValidateWrapper>
                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                    <Col md={6}>
                        <fieldset>
                            <legend className='mb-0'>Настройки аккаунта</legend>
                            <Row className='gx-4 gy-2 gy-sm-3 align-items-center'>
                                <Col md={3}>
                                    Email
                                </Col>
                                <Col md={9}>
                                    <input type="email" placeholder='Email'
                                           {...register('email', {
                                               required: 'Выберите значение!',
                                           })}
                                    />
                                </Col>
                                <Col md={3}>
                                    Пароль
                                </Col>
                                <Col md={9}>
                                    <input type="password" placeholder='Пароль' autoComplete="new-password"
                                           {...register('password', {
                                           })}
                                    />
                                </Col>
                            </Row>
                            <label className='mt-3'>
                                <input type="checkbox"
                                       {...register('isPublicProfile', {
                                       })}
                                />
                                <span>Скрыть профиль</span>
                            </label>
                            <p className='fs-08 achromat-3 mt-2'>Этот параметр скрывает вашу общедоступную страницу
                                профиля, однако ваше имя по-прежнему будет отображаться в списке результатов
                                мероприятий, в которых вы участвовали.</p>
                            <button type='button' className='btn-5 mt-3'>Удалить аккаунт</button>
                        </fieldset>
                    </Col>
                    <Col xs={12} xl={6}>
                        <fieldset>
                            <legend className='mb-0'>Ваши параметры</legend>
                            <Row className='gx-4 gy-2 gy-sm-3 align-items-center'>
                                <Col md={12}>
                                    <p className='mb-1'>Дата рождения</p>
                                    <Row xs={1} sm={3} className="gy-2 gy-sm-0 gx-1">
                                        <Col>
                                            <Select
                                                name="day"
                                                placeholder="День"
                                                classNamePrefix="simple-select"
                                                className="simple-select-container borderless w-100"
                                                options={daysList}
                                            />
                                        </Col>
                                        <Col>
                                            <Select
                                                name="month"
                                                placeholder="Месяц"
                                                classNamePrefix="simple-select"
                                                className="simple-select-container borderless w-100"
                                                options={monthsList}
                                            />
                                        </Col>
                                        <Col>
                                            <Select
                                                name="year"
                                                placeholder="Год"
                                                classNamePrefix="simple-select"
                                                className="simple-select-container borderless w-100"
                                                options={yearsList}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={3}>
                                    Рост, см.
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.height}>
                                        <input type="text" placeholder='Рост'
                                               {...register('height',{
                                                   valueAsNumber:true,
                                                   }
                                               //     {
                                               //     required: 'Поле обязательно к заполнению',
                                               //     min:{value:118, message:'Минимальный рост 118см'},
                                               //     max:{value:250, message:'Максимальный рост 250см'},
                                               //     pattern: {value: /^[0-9]+$/i, message: 'Для ввода допускаются только цифры'},
                                               // }
                                               )}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col md={3}>
                                    Вес, кг.
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.weight}>
                                        <input type="text" placeholder='Вес'
                                               {...register('weight',{
                                                   valueAsNumber: true
                                                   }
                                               //     {
                                               //     required: 'Поле обязательно к заполнению',
                                               //     min:{value:45, message:'Минимальный вес 45кг'},
                                               //     max:{value:100, message:'Максимальный вес 200кг'},
                                               //     pattern: {value: /^[0-9]+$/i, message: 'Для ввода допускаются только цифры'},
                                               // }
                                               )}
                                        />
                                    </ValidateWrapper>

                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                    <Col md={6}>
                        <fieldset>
                            <legend>Уровни пояса/навыков</legend>
                            <ul className='list-info mb-4'>
                                <li>
                                    <h6>Дисциплина</h6>
                                    <p>Пояс</p>
                                </li>
                                <li>
                                    <h6>Дисциплина</h6>
                                    <p>Пояс</p>
                                </li>
                            </ul>
                            <button type='button' className='btn-4 mb-4'>добавить пояс/навык</button>
                        </fieldset>
                    </Col>
                    <Col md={6}>
                        <fieldset>
                            <legend>Ваши команды</legend>
                            <ul className='list-info mb-4'>
                                <li>
                                    <h6>Название команды</h6>
                                    <button type='button' className='red fs-11'><RiCloseLine/></button>
                                </li>
                                <li>
                                    <h6>Название команды</h6>
                                    <button type='button' className='red fs-11'><RiCloseLine/></button>
                                </li>
                            </ul>

                            <h5>Вступить в команду</h5>
                            <Select
                                name="sex"
                                placeholder="Выберите команду"
                                classNamePrefix="simple-select"
                                className="simple-select-container borderless w-100"
                                options={sexList}
                            />
                            <div className="d-flex mt-3">
                                <button type='button' className='btn-1'>Вступить</button>
                                <button type='button' className='btn-4 ms-4'>Создать</button>
                            </div>

                        </fieldset>
                    </Col>
                    <Col xs={12} xl={6}>
                        <fieldset>
                            <legend className='mb-0'>Контакты</legend>
                            <Row className='gx-4 gy-2 gy-sm-3 align-items-center'>
                                <Col md={3}>
                                    Телефон
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.phone}>
                                        <input className='mb-3' type="tel" placeholder='+7 900 000 00 00'
                                               onClick={(e)=>{
                                                   if(!getValues('phone') || getValues('phone').length===0)
                                                       setValue('phone', '+7')
                                                   SelectToEndForPhoneInput(e)
                                               }}

                                               {...register('phone', {
                                                   required: 'Поле обязательно к заполнению',
                                                   minLength: {value: 12, message: 'Минимальная длина 12 символов',},
                                                   maxLength: {value: 12, message: 'Максимальная длина 12 символов',},
                                                   pattern: {value: /\+[7][0-9]{10}/, message: 'Не верный формат',},
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col md={3}>
                                    Адрес
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.address}>
                                        <input type="text" placeholder='Адрес'
                                               {...register('address',
                                               //     {
                                               //     required: 'Поле обязательно к заполнению',
                                               //     minLength: {value: 2, message: 'Минимум 2 символа'},
                                               //     maxLength: {value: 50, message: 'Максимум 50 символов',},
                                               // }
                                               )}
                                        />
                                    </ValidateWrapper>

                                </Col>
                                <Col md={3}>
                                    Город
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.city}>
                                        <input type="text" placeholder='Город'
                                               {...register('city',
                                               //     {
                                               //     required: 'Поле обязательно к заполнению',
                                               //     minLength: {value: 2, message: 'Минимум 2 символа'},
                                               //     pattern: {
                                               //         value: /^[A-Za-z-А-Яа-я]+$/i,
                                               //         message: "Для ввода допускаются только буквы"
                                               //     },
                                               //     maxLength: {value: 50, message: 'Максимум 50 символов',},
                                               // }
                                               )}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col md={3}>
                                    Район
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.district}>
                                        <input type="text" placeholder='Район'
                                               {...register('district',
                                               //     {
                                               //     required: 'Поле обязательно к заполнению',
                                               //     minLength: {value: 2, message: 'Минимум 2 символа'},
                                               //     pattern: {
                                               //         value: /^[A-Za-z-А-Яа-я]+$/i,
                                               //         message: "Для ввода допускаются только буквы"
                                               //     },
                                               //     maxLength: {value: 50, message: 'Максимум 50 символов',},
                                               // }
                                               )}
                                        />
                                    </ValidateWrapper>

                                </Col>
                                <Col md={3}>
                                    Регион
                                </Col>
                                <Col md={9}>
                                    <ValidateWrapper error={errors?.region}>
                                        <input type="tel" placeholder='Регион'
                                               {...register('region',
                                               //     {
                                               //     required: 'Поле обязательно к заполнению',
                                               //     minLength: {value: 2, message: 'Минимум 2 символа'},
                                               //     pattern: {
                                               //         value: /^[A-Za-z-А-Яа-я]+$/i,
                                               //         message: "Для ввода допускаются только буквы"
                                               //     },
                                               //     maxLength: {value: 50, message: 'Максимум 50 символов',},
                                               // }
                                               )}
                                        />
                                    </ValidateWrapper>
                                </Col>
                            </Row>
                        </fieldset>
                    </Col>
                </Row>
                <button type='submit' className='btn-1'>Сохранить</button>
            </form>
        </section>
    );
};

export default Profile;