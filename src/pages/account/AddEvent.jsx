import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import TournamentBracket from '../../components/TournamentBracket';
import ParticipantControl from '../../components/utils/ParticipantControl';
import {useForm} from "react-hook-form";
import {GetCategories} from "../../services/params";
import ValidateWrapper from "../../components/utils/ValidateWrapper";

const sportsList = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
];
const sexList = [
    {value: 'male', label: 'Мужской'},
    {value: 'female', label: 'Женский'},
];

const AddEvent = () => {
    const {register, handleSubmit, formState: {errors}, setValue, clearErrors, getValues} = useForm()
    const [categories, setCategories] = useState(sportsList)
    useEffect(() => {
        GetCategories().then(res => res && setCategories(res))
    }, [])

    const SubmitClick = (data) => {
        alert(JSON.stringify(data))
    }
    return (
        <section className='account-box'>
            <h1>Создание мероприятия</h1>
            <form onSubmit={handleSubmit(SubmitClick)}>
                <fieldset>
                    <legend>Основное</legend>
                    <Row className='gx-4 gx-xl-5'>
                        <Col md={5}>
                            <h5>Дисциплина</h5>
                            <ValidateWrapper error={errors?.discipline}>
                                <Select
                                    name="sport"
                                    placeholder="Дисциплина"
                                    classNamePrefix="simple-select"
                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                    options={sportsList}
                                    {...register('discipline', {
                                        required: 'Выберите значение!',
                                    })}
                                    onChange={(e) => {
                                        setValue('discipline', e);
                                        clearErrors('discipline')
                                    }}
                                />
                            </ValidateWrapper>
                            <h5>Название</h5>
                            <ValidateWrapper error={errors?.name}>
                                <input type="text" className='mb-3' placeholder='Название'
                                       {...register('name', {
                                           required: 'Поле обязательно к заполнению',
                                           pattern: {
                                               value: /^[A-Za-z-А-Яа-я]+$/i,
                                               message: "Для ввода допускаются только буквы"
                                           },
                                           minLength: {value: 2, message: 'Минимальная длина 2 символа',},
                                           maxLength: {value: 50, message: 'Максимальная длина 50 символов',},
                                       })}
                                />
                            </ValidateWrapper>
                            <h5>Начало мероприятия</h5>
                            <ValidateWrapper error={errors?.startsAt}>
                                <input type="datetime-local" className='mb-3' placeholder='Начало мероприятия'
                                       {...register('startsAt', {
                                           required: 'Поле обязательно к заполнению',
                                       })}
                                />
                            </ValidateWrapper>
                            <h5>Место проведения</h5>
                            <input type="text" className='mb-3' placeholder='Место проведения'/>
                        </Col>
                        <Col md={7}>
                            <h5>Ранняя регистрация</h5>
                            <Row sm={2} className='gy-2 gy-sm-0 mb-3'>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-4 me-sm-3'>с</span>
                                    <ValidateWrapper error={errors?.earlyRegistrationFrom}>
                                        <input type="datetime-local"
                                               {...register('earlyRegistrationFrom', {
                                                   required: 'Поле обязательно к заполнению',
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-3'>по</span>
                                    <ValidateWrapper error={errors?.earlyRegistrationTo}>
                                        <input type="datetime-local"
                                               {...register('earlyRegistrationTo', {
                                                   required: 'Поле обязательно к заполнению',
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                            </Row>
                            <h5>Стандартная регистрация</h5>
                            <Row sm={2} className='gy-2 gy-sm-0 mb-3'>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-4 me-sm-3'>с</span>
                                    <ValidateWrapper error={errors?.standartRegistrationFrom}>
                                        <input type="datetime-local"
                                               {...register('standartRegistrationFrom', {
                                                   required: 'Поле обязательно к заполнению',
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-3'>по</span>
                                    <ValidateWrapper error={errors?.standartRegistrationTo}>
                                        <input type="datetime-local"
                                               {...register('standartRegistrationTo', {
                                                   required: 'Поле обязательно к заполнению',
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                            </Row>
                            <h5>Поздняя регистрация</h5>
                            <Row sm={2} className='gy-2 gy-sm-0 mb-3'>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-4 me-sm-3'>с</span>
                                    <ValidateWrapper error={errors?.lateRegistrationFrom}>
                                        <input type="datetime-local"
                                               {...register('lateRegistrationFrom', {
                                                   required: 'Поле обязательно к заполнению',
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-3'>по</span>
                                    <ValidateWrapper error={errors?.lateRegistrationTo}>
                                    <input type="datetime-local"
                                           {...register('lateRegistrationTo', {
                                               required: 'Поле обязательно к заполнению',
                                           })}
                                    />
                                    </ValidateWrapper>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </fieldset>
                <fieldset>
                    <Row xs={1} md={2}>
                        <Col className='mb-3 mb-md-0'>
                            <legend>Информация</legend>
                            <ValidateWrapper error={errors?.description} textarea={true}>
                                <textarea rows="14" placeholder='Описание мероприятия'
                                          {...register('description', {
                                              required: 'Выберите значение',
                                              minLength: {value: 5, message: 'Минимальное значение 5 символов'},
                                              maxLength: {value: 500, message: 'Максимальное значение 500 символов'}
                                          })}
                                >
                                </textarea>
                            </ValidateWrapper>

                        </Col>
                        <Col>
                            <h5>Весовая категория</h5>
                            <ValidateWrapper error={errors.weightCategoryId}>
                                <Select
                                    name="weightCategoryId"
                                    placeholder="Весовая категория"
                                    classNamePrefix="simple-select"
                                    isMulti
                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                    options={sportsList}
                                    {...register('weightCategoryId', {
                                        required: 'Выберите значение',
                                    })}
                                    onChange={(e) => {
                                        setValue('weightCategoryId', e);
                                        clearErrors('weightCategoryId')
                                    }}
                                />
                            </ValidateWrapper>
                            <h5>Пол</h5>
                            <ValidateWrapper error={errors.gender}>
                                <Select
                                    name="gender"
                                    placeholder="Пол"
                                    classNamePrefix="simple-select"
                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                    options={sexList}
                                    {...register('gender', {
                                        required: 'Выберите значение',
                                    })}
                                    onChange={(e) => {
                                        setValue('gender', e);
                                        clearErrors('gender')
                                    }}
                                />
                            </ValidateWrapper>
                            <h5>Возраст</h5>
                            <ValidateWrapper error={errors.ageCategoryId}>
                                <Select
                                    name="ageCategoryId"
                                    placeholder="Возраст"
                                    classNamePrefix="simple-select"
                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                    options={sportsList}
                                    {...register('ageCategoryId', {
                                        required: 'Выберите значение',
                                    })}
                                    onChange={(e) => {
                                        setValue('ageCategoryId', e);
                                        clearErrors('ageCategoryId')
                                    }}
                                />
                            </ValidateWrapper>
                            <h5>Разряд</h5>
                            <ValidateWrapper error={errors.weightCategoryId}>
                                <Select
                                    name="weight"
                                    placeholder="Разряд"
                                    classNamePrefix="simple-select"
                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                    options={sportsList}
                                    {...register('weightCategoryId', {
                                        required: 'Выберите значение',
                                    })}
                                    onChange={(e) => {
                                        setValue('weightCategoryId', e);
                                        clearErrors('weightCategoryId')
                                    }}
                                />
                            </ValidateWrapper>
                        </Col>
                    </Row>
                </fieldset>

                <fieldset>
                    <legend className='mb-0'>Участники</legend>
                    <ul className='list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-3 g-md-4'>
                        <li>
                            <ParticipantControl
                                approved={true}
                                name={'Имя'}
                                surname={'Фамилия'}
                                town={'Город'}
                                birth={'01.01.2001'}/>
                        </li>
                        <li>
                            <ParticipantControl
                                approved={true}
                                name={'Имя'}
                                surname={'Фамилия'}
                                town={'Город'}
                                birth={'01.01.2001'}/>
                        </li>
                        <li>
                            <ParticipantControl
                                approved={true}
                                name={'Имя'}
                                surname={'Фамилия'}
                                town={'Город'}
                                birth={'01.01.2001'}/>
                        </li>
                    </ul>
                </fieldset>

                <fieldset>
                    <legend>Турнирная таблица</legend>
                    <button type='submit' className='btn-4 mb-4'>Сформировать</button>

                    <TournamentBracket/>
                </fieldset>
            </form>
        </section>
    );
};

export default AddEvent;