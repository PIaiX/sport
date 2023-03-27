import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import TournamentBracket from '../../components/TournamentBracket';
import ParticipantControl from '../../components/utils/ParticipantControl';
import {useForm} from "react-hook-form";
import {GetAgeCategory, GetDiscipline, GetWightCategory} from "../../services/params";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {CreateEvent} from "../../services/event";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {FiMapPin} from "react-icons/fi";
import {getAddress} from "../../services/YMap";
import {useParams} from "react-router-dom";
import MapWrapper from "../../components/utils/MapWrapper";
import {SlSocialVkontakte} from "react-icons/sl";
import {BsInstagram} from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {CiYoutube} from "react-icons/ci";
import {FaTiktok} from "react-icons/fa";
const sportsList = [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
];
const sexList = [
    {value: true, label: 'Мужской'},
    {value: false, label: 'Женский'},
];

const AddEvent = () => {
    const {register, handleSubmit, formState: {errors}, setValue, clearErrors, setError} = useForm()
    const [categories, setCategories] = useState()
    const [weightCategories, setWeightCategories] = useState()
    const [ageCategories, setAgeCategories] = useState()
    const [paceName, setPlaceName] = useState()
    const [placeState, setPlaceState] = useState([])
    const {id} = useParams()

    useEffect(() => {
        GetDiscipline().then(res => {
            if (res) {
                setCategories(res.map((element) => ({value: element.id, label: element.name})))
            }
        })
    }, [])

    useEffect(() => {
        if (placeState) {
            getAddress(placeState).then(res => {
                if (res) {
                    setPlaceName(res?.suggestions[0]?.value)
                }
            })
            clearErrors('placeState')
        }
    }, [placeState])

    const changeWeight = (index) => {
        GetWightCategory(index).then(res => {
            if (res) {
                setWeightCategories(res.map((element) => ({
                    value: element.id,
                    label: `От ${element.weightFrom} до ${element.weightTo}`
                })))
            }
        })
        GetAgeCategory(index).then(res => {
            if (res) {
                setAgeCategories(res.map((element) => ({
                    value: element.id,
                    label: `От ${element.ageFrom} до ${element.ageTo}`
                })))
            }
        })

    }

    const SubmitClick = ({
                             startsAt,
                             earlyRegistrationFrom,
                             earlyRegistrationTo,
                             standartRegistrationFrom,
                             standartRegistrationTo,
                             lateRegistrationFrom,
                             lateRegistrationTo,
                             ageCategoryId,
                             disciplineId,
                             gender,
                             weightCategoryId,
                             ...data
                         }) => {
        if (!placeState) {
            setError('placeState', {message: 'Выберите адрес'})
            return
        }
        const t = {
            startsAt: startsAt.toISOString(),
            earlyRegistrationFrom: earlyRegistrationFrom.toISOString(),
            earlyRegistrationTo: earlyRegistrationTo.toISOString(),
            standartRegistrationFrom: standartRegistrationFrom.toISOString(),
            standartRegistrationTo: standartRegistrationTo.toISOString(),
            lateRegistrationFrom: lateRegistrationFrom.toISOString(),
            lateRegistrationTo: lateRegistrationTo.toISOString(),

            ageCategoryIds: [Number(ageCategoryId.value)],
            numberOfParticipants: 10,
            disciplineId: Number(disciplineId.value),
            gender: gender.value,
            latitude: placeState[0].toString(),
            longitude: placeState[1].toString(),
            weightCategoryIds: weightCategoryId.map(element => element.value),
            rankFromId: 1,
            rankToId: 3,
            ...data
        }
        console.log(t)
        CreateEvent(t)
            .then(res => console.log(res))
            .catch(res => console.log(res))

    }

    const MapClick = (e) => {
        setPlaceState(e)
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
                            <ValidateWrapper error={errors?.disciplineId}>
                                <Select
                                    name="sport"
                                    placeholder="Дисциплина"
                                    classNamePrefix="simple-select"
                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                    options={categories}
                                    {...register('disciplineId', {
                                        required: 'Выберите значение!',
                                    })}
                                    onChange={(e) => {
                                        changeWeight(e.value)
                                        setValue('disciplineId', e);
                                        clearErrors('disciplineId')
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
                                           valueAsDate: true
                                       })}
                                />
                            </ValidateWrapper>
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
                                                   valueAsDate: true
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
                                                   valueAsDate: true
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
                                                   valueAsDate: true
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
                                                   valueAsDate: true
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
                                                   valueAsDate: true
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
                                                   valueAsDate: true
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
                        <Col className={'mb-2'}>
                            <MapWrapper error={placeState?.length == 0} textarea={true}>
                                <div className="card">
                                    <h5 className='card-title' style={{width: "110%", marginLeft: '-10px'}}>
                                        <FiMapPin/>
                                        <span>Место проведения</span>
                                    </h5>
                                    <div className='card-body'>
                                        <address>{paceName}</address>
                                    </div>
                                    <YMaps query={{lang: "ru_RU"}}>
                                        <Map style={{width: '100%', height: '350px'}}
                                             onClick={(e) => MapClick(e.get('coords'))}
                                             defaultState={{center: [55.821283, 49.161006], zoom: 13,}}>
                                            <Placemark geometry={placeState}
                                            />
                                        </Map>
                                    </YMaps>
                                </div>
                            </MapWrapper>
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
                                    options={weightCategories}
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
                                    options={ageCategories}
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
                    <Row className='mb-4'>
                        <legend>Социальные сети</legend>
                        <Row xs={1} md={2}>
                            <Col>
                                <Row xs={2} className={'mb-3'}>
                                    <Col className={'col-2'}>
                                        <SlSocialVkontakte size={'35'}/>
                                    </Col>
                                    <Col className={'col-10'}>
                                        <input type="text"
                                               placeholder={'Введите ссылку'}
                                               {...register('vkLink', {})}
                                        />
                                    </Col>
                                </Row>
                                <Row xs={2} className={'mb-3'}>
                                    <Col className={'col-2'}>
                                        <BsInstagram size={'35'}/>
                                    </Col>
                                    <Col className={'col-10'}>
                                        <input type="text"
                                               placeholder={'Введите ссылку'}
                                               {...register('instaLink', {})}
                                        />
                                    </Col>
                                </Row>
                                <Row xs={2} className={'mb-3'}>
                                    <Col className={'col-2'}>
                                        <CiYoutube size={'35'}/>
                                    </Col>
                                    <Col className={'col-10'}>
                                        <input type="text"
                                               placeholder={'Введите ссылку'}
                                               {...register('youtubeLink', {})}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col className='md-6'>
                                <Row xs={2} className={'mb-3'}>
                                    <Col className={'col-2'}>
                                        <TbBrandTelegram size={'35'}/>
                                    </Col>
                                    <Col className={'col-10'}>
                                        <input type="text"
                                               placeholder={'Введите ссылку'}
                                               {...register('telegramLink', {})}
                                        />
                                    </Col>
                                </Row>
                                <Row xs={2} className={'mb-3'}>
                                    <Col className={'col-2'}>
                                        <AiOutlineWhatsApp size={'35'}/>
                                    </Col>
                                    <Col className={'col-10'}>
                                        <input type="text"
                                               placeholder={'Введите ссылку'}
                                               {...register('whatsAppLink', {})}
                                        />
                                    </Col>
                                </Row>
                                <Row xs={2}>
                                    <Col className={'col-2'}>
                                        <FaTiktok size={'35'}/>
                                    </Col>
                                    <Col className={'col-10'}>
                                        <input type="text"
                                               placeholder={'Введите ссылку'}
                                               {...register('tictokLink', {})}
                                        />
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Row>
                    <Row>
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
                    </Row>
                </fieldset>
                <button type='submit' className='btn-4 mb-4'>Сформировать</button>

                {id &&
                    <>
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

                            <TournamentBracket/>
                        </fieldset>
                    </>
                }
            </form>
        </section>
    );
};

export default AddEvent;