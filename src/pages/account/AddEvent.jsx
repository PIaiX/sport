import React, {createContext, useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import {Controller, useController, useFieldArray, useForm} from "react-hook-form";
import {GetAgeCategory, GetDiscipline, GetWightCategory} from "../../services/params";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {CreateEvent, EditEvent, GetOneEvent} from "../../services/event";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {FiMapPin} from "react-icons/fi";
import {getAddress} from "../../services/YMap";
import {useNavigate, useParams} from "react-router-dom";
import MapWrapper from "../../components/utils/MapWrapper";
import {SlSocialVkontakte} from "react-icons/sl";
import {BsInstagram} from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {CiYoutube} from "react-icons/ci";
import {FaTiktok} from "react-icons/fa";
import {onImageHandler} from "../../helpers/onImageHandler";
import {useImageViewer} from "../../hooks/imageViewer";
import {useAppAction} from "../../store";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import {MyEditor} from "../../components/MyEditor/MyEditor";
import TableWithUsers from "../../components/Table/TableWithUsers";

const sexList = [
    {value: true, label: 'Мужской'},
    {value: false, label: 'Женский'},
];

export const EventContext = createContext()


const AddEvent = () => {

    const {id} = useParams()
    const {setNotFound} = useAppAction()
    const navigate = useNavigate()

    const [categoriesOptions, setCategories] = useState()
    const [ageCategories, setAgeCategories] = useState()
    const [placeState, setPlaceState] = useState([55.821283, 49.161006])
    const [event, setEvent] = useState()

    const [setImageToNull, setSetImageToNull] = useState(false)
    const [avatar, setAvatar] = useState(null)
    const photo = useImageViewer(avatar?.image)

    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue,
        getValues,
        clearErrors,
        unregister,
        control,
    } = useForm()
    const {
        field: {value: disciplineIdValue, onChange: disciplineIdOnChange, ...disciplineIdField}
    } = useController({name: 'disciplineId', control, rules: {required: 'Выберите значение'}});
    const {
        fields, append, prepend, remove, swap, move, insert, replace
    } = useFieldArray({name: "categories", control});


    useEffect(() => {
        setValue('disciplineId', categoriesOptions?.find(element => element?.value == event?.disciplineId))
    }, [event, categoriesOptions])

    useEffect(() => {
        GetDiscipline().then(res => {
            if (res) {
                const categ = res.map((element) => ({value: element.id, label: element.name}))
                setCategories(categ)
            }
        })
    }, [])

    useEffect(() => {
        const disciplineId = getValues('disciplineId')
        if (disciplineId) {
            GetAgeCategory(disciplineId?.value).then(res => {
                if (res) {
                    const list = res.map((element) => ({
                        value: element.id,
                        label: `От ${element.ageFrom} до ${element.ageTo}`
                    }))
                    setAgeCategories(list)
                    if (!id)
                        setValue('categories', [{ageCategories: list}])
                }
            })
        }
    }, [getValues('disciplineId')])

    useEffect(() => {
        if (id) {
            GetOneEvent(id).then(res => {
                if (res)
                    setEvent(res)
                else
                    setNotFound(true)
            })
        }
    }, [id])

    useEffect(() => {
        if (event) {
            setValue('name', event?.name)
            setValue('venue', event?.venue)
            setValue('startsAt', event?.startsAt.slice(0, -1))
            setValue('earlyRegistrationFrom', event?.earlyRegistrationFrom.slice(0, -1))
            setValue('earlyRegistrationTo', event?.earlyRegistrationTo.slice(0, -1))
            setValue('standartRegistrationFrom', event?.standartRegistrationFrom.slice(0, -1))
            setValue('standartRegistrationTo', event?.standartRegistrationTo.slice(0, -1))
            setValue('lateRegistrationFrom', event?.lateRegistrationFrom.slice(0, -1))
            setValue('lateRegistrationTo', event?.lateRegistrationTo.slice(0, -1))
            setValue('vkLink', event?.vkLink)
            setValue('instaLink', event?.instaLink)
            setValue('telegramLink', event?.telegramLink)
            setValue('whatsAppLink', event?.whatsAppLink)
            setValue('tictokLink', event?.tictokLink)
            setValue('youtubeLink', event?.youtubeLink)
            setValue('description', event?.description)
            setValue('ageCategoryIds', {value: 2, label: 'От 12 до 13'})
            setPlaceState([event?.latitude, event?.longitude])

            const categories = event?.categories.map((element, index) => {
                const gender = sexList[event?.gender ? 0 : 1]
                const weightCategoryId = {
                    value: element?.weightCategory?.ageCategoryId,
                    label: `От ${element?.weightCategory?.weightFrom} до ${element?.weightCategory?.weightTo}`
                }
                const ageCategoryId = {
                    value: element?.weightCategory?.id,
                    label: `От ${element?.weightCategory?.ageCategory?.ageFrom} до ${element?.weightCategory?.ageCategory?.ageTo}`
                }
                setValue(`ageCategoryId-${index}`, ageCategoryId)
                setValue(`weightCategoryId-${index}`, weightCategoryId)
                setValue(`gender-${index}`, gender)

                return {
                    ageCategories:id?[]:ageCategories,
                    gender:id?[]:ageCategories,
                    ageId: ageCategoryId,
                    weightCategories: [weightCategoryId],
                    weightCategoryId
                }

            })
            setValue('categories', categories)
        }
    }, [event])

    useEffect(() => {
        if (placeState) {
            getAddress(placeState).then(res => {
                if (res) {
                    setValue('venue', res?.suggestions[0]?.value)
                }
            })
            clearErrors('placeState')
        }
    }, [placeState])

    // setImageToNull
    const SubmitClick = (state) => {
        const {
            name,
            description,
            venue,
            startsAt,
            earlyRegistrationFrom,
            earlyRegistrationTo,
            standartRegistrationFrom,
            standartRegistrationTo,
            lateRegistrationFrom,

            vkLink,
            instaLink,
            telegramLink,
            whatsAppLink,
            tictokLink,
            youtubeLink,

            lateRegistrationTo,
            disciplineId,
            categories,
        } = state
        const request = {
            name,
            description,
            venue,
            startsAt: startsAt + 'Z',
            earlyRegistrationFrom: earlyRegistrationFrom + 'Z',
            earlyRegistrationTo: earlyRegistrationTo + 'Z',
            standartRegistrationFrom: standartRegistrationFrom + 'Z',
            standartRegistrationTo: standartRegistrationTo + 'Z',
            lateRegistrationFrom: lateRegistrationFrom + 'Z',
            lateRegistrationTo: lateRegistrationTo + 'Z',

            vkLink,
            instaLink,
            telegramLink,
            whatsAppLink,
            tictokLink,
            youtubeLink,
            numberOfParticipants: 10000,
            disciplineId: Number(disciplineId.value),

            latitude: placeState[0].toString(),
            longitude: placeState[1].toString(),
        }

        const formData = new FormData()
        for (const key in request) {
            formData.append(key, request[key])
        }
        if (setImageToNull)
            formData.append('setImageToNull', true)
        formData.append('image', avatar?.image)

        categories?.forEach(element => {
            formData.append('categories[]', JSON.stringify({
                gender: element.gender?.value,
                weightCategoryId: element.weightCategoryId?.value
            }))
        })

        if (id) {
            EditEvent(formData, id)
                .then(res => res && navigate('/account/events'))
                .catch(res => console.log(res))
        } else
            CreateEvent(formData)
                .then(res => res && navigate('/account/events'))
                .catch(res => console.log(res))

    }
    const MapClick = (e) => {
        setPlaceState(e)
    }

    const DelImage = () => {
        setAvatar(null)
        setSetImageToNull(true)
    }
    return (
        <section className='account-box'>
            <h1>
                {id ? 'Редактирование мероприятия' : 'Создание мероприятия'}
            </h1>
            <form onSubmit={handleSubmit(SubmitClick)}>
                <fieldset>
                    <legend>Основное</legend>
                    <Row className={'mb-3'}>
                        <img className={'col-sm-8 col-md-6 col-xl-5 img-event'}
                             src={avatar ? photo?.data_url : checkPhotoPath(setImageToNull ? '' : event?.image, true)}/>
                        <div className={'d-flex gap-2 mt-2'}>
                            <div className="file-upload">
                                <button className="btn-4">Загрузить фото</button>
                                <input type="file" onChange={(e) => {
                                    setSetImageToNull(false)
                                    onImageHandler(e, setAvatar, 'image')
                                }}/>
                            </div>
                            <input type={'button'} onClick={DelImage} className={'btn-5'} value={'Удалить фото'}/>
                        </div>
                    </Row>

                    <Row className='gx-4 gx-xl-5'>
                        <Col md={5}>
                            <h5>Дисциплина</h5>
                            <ValidateWrapper error={errors?.disciplineId}>
                                <Select
                                    name="sport"
                                    placeholder="Дисциплина"
                                    classNamePrefix="simple-select"
                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                    options={categoriesOptions}
                                    value={disciplineIdValue}
                                    onChange={option => disciplineIdOnChange(option)}
                                    {...disciplineIdField}
                                />
                            </ValidateWrapper>
                            <h5>Название</h5>
                            <ValidateWrapper error={errors?.name}>
                                <input type="text" className='mb-3' placeholder='Название'
                                       {...register('name', {
                                           required: 'Поле обязательно к заполнению',
                                           minLength: {value: 2, message: 'Минимальная длина 2 символа',},
                                           maxLength: {value: 50, message: 'Максимальная длина 50 символов',},
                                       })}
                                />
                            </ValidateWrapper>
                            <h5>Начало мероприятия</h5>
                            <ValidateWrapper error={errors?.startsAt}>
                                <input type="datetime-local"
                                       className='mb-3'
                                       placeholder='Начало мероприятия'
                                       {...register('startsAt', {
                                           required: 'Поле обязательно к заполнению'
                                       })}
                                />
                            </ValidateWrapper>
                        </Col>
                        <Col md={6}>
                            <h5>Ранняя регистрация</h5>
                            <Row sm={2} className='gy-2 gy-sm-0 mb-3'>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-4 me-sm-3'>с</span>
                                    <ValidateWrapper error={errors?.earlyRegistrationFrom}>
                                        <input type="datetime-local"
                                               {...register('earlyRegistrationFrom', {
                                                   required: 'Поле обязательно к заполнению'
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-3'>по</span>
                                    <ValidateWrapper error={errors?.earlyRegistrationTo}>
                                        <input type="datetime-local"
                                               {...register('earlyRegistrationTo', {
                                                   required: 'Поле обязательно к заполнению'
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
                                                   required: 'Поле обязательно к заполнению'
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-3'>по</span>
                                    <ValidateWrapper error={errors?.standartRegistrationTo}>
                                        <input type="datetime-local"
                                               {...register('standartRegistrationTo', {
                                                   required: 'Поле обязательно к заполнению'
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
                                                   required: 'Поле обязательно к заполнению'
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col className='d-flex align-items-center'>
                                    <span className='fw-6 me-3'>по</span>
                                    <ValidateWrapper error={errors?.lateRegistrationTo}>
                                        <input type="datetime-local"
                                               {...register('lateRegistrationTo', {
                                                   required: 'Поле обязательно к заполнению'
                                               })}
                                        />
                                    </ValidateWrapper>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </fieldset>
                <fieldset>
                    <Row>
                        <Col className={'mb-2'}>
                            <MapWrapper error={errors.venue} textarea={true}>
                                <div className="card">
                                    <h5 className='card-title' style={{width: "110%", marginLeft: '-10px'}}>
                                        <FiMapPin/>
                                        <span>Место проведения</span>
                                    </h5>
                                    <div className='card-body'>
                                        <address>
                                            <input disabled
                                                   {...register('venue', {
                                                       required: 'Выберите значение',
                                                   })}
                                            />
                                        </address>
                                    </div>
                                    <YMaps query={{lang: "ru_RU"}}>
                                        <Map style={{width: '100%', height: '350px'}}
                                             onClick={(e) => MapClick(e.get('coords'))}
                                             defaultState={{center: placeState, zoom: 13,}}>
                                            <Placemark geometry={placeState}
                                            />
                                        </Map>
                                    </YMaps>
                                </div>
                            </MapWrapper>
                        </Col>
                    </Row>
                    <Row>
                        <h5>Категории</h5>
                        {fields?.map((item, index) =>
                            <Row key={index} xs={3}>
                                <Col>
                                    <ValidateWrapper error={errors[`ageCategoryId-${index}`]} className={'col-xl-2'}>
                                        <Controller
                                            name={`ageCategoryId-${index}`}
                                            control={control}
                                            rules={{
                                                required: 'Выберите значение',
                                                onChange: async ({target: {value: option}}) => {
                                                    const {value} = option
                                                    const weightCategories = await GetWightCategory(value)
                                                    let array = getValues('categories')
                                                    array[index] = {...array[index], weightCategories, ageId: option}
                                                    setValue('categories', array)
                                                    setValue(`weightCategoryId-${index}`, null)
                                                },
                                            }}
                                            render={({field}) => (
                                                <Select
                                                    value={item?.option}
                                                    placeholder="Возраст"
                                                    classNamePrefix="simple-select"
                                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                                    options={item?.ageCategories}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col>
                                    <ValidateWrapper error={errors[`weightCategoryId-${index}`]} className={'col-xl-2'}>
                                        <Controller
                                            name={`weightCategoryId-${index}`}
                                            control={control}
                                            rules={{
                                                required: 'Выберите значение',
                                                onChange: ({target: {value: option}}) => {
                                                    let array = getValues('categories')
                                                    array[index] = {...array[index], weightCategoryId: option}
                                                    setValue('categories', array)
                                                },
                                            }}
                                            render={({field}) => (
                                                <Select
                                                    placeholder="Весовая категория"
                                                    classNamePrefix="simple-select"
                                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                                    options={item?.weightCategories}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                <Col>
                                    <ValidateWrapper error={errors[`gender-${index}`]} className={'col-xl-2'}>
                                        <Controller
                                            name={`gender-${index}`}
                                            control={control}
                                            rules={{
                                                required: 'Выберите значение',
                                                onChange: ({target: {value: option}}) => {
                                                    let array = getValues('categories')
                                                    array[index] = {...array[index], gender: option}
                                                    setValue('categories', array)
                                                },
                                            }}
                                            render={({field}) => (
                                                <Select
                                                    placeholder="Пол"
                                                    classNamePrefix="simple-select"
                                                    className="simple-select-container borderless w-100 mb-3 validate-select"
                                                    options={id?[]:sexList}
                                                    {...field}
                                                />
                                            )}
                                        />
                                    </ValidateWrapper>
                                </Col>
                                {!index == fields?.length - 1 &&
                                    <Col>
                                        <input type={'button'} className={'btn-5'} value={'Удалить'}
                                               onClick={() => {
                                                   remove(index)
                                                   unregister(`ageCategoryId-${index}`)
                                                   unregister(`weightCategoryId-${index}`)
                                                   unregister(`gender-${index}`)
                                               }}/>
                                    </Col>

                                }
                            </Row>
                        )}
                        {!id &&
                            <Row>
                                <button type='button' className='btn-4 mb-4'
                                        onClick={() => {
                                            append({ageCategories});
                                        }}>Добавить
                                </button>
                            </Row>
                        }
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
                                <Controller
                                    name="description"
                                    control={control}
                                    rules={{required: 'Выберите значение'}}
                                    render={({field: {value, onChange}}) =>
                                        <MyEditor value={value} onChange={onChange}/>
                                    }
                                />
                            </ValidateWrapper>
                        </Col>

                    </Row>
                </fieldset>
                <button type='submit' className='btn-4 mb-4'>
                    {id ? 'Редактировать' : 'Сформировать'}
                </button>
            </form>
            {id &&
                <TableWithUsers event={event} setEvent={setEvent}/>
            }
        </section>
    )
        ;
};

export default AddEvent;