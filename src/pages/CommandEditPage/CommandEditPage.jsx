import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import {onImageHandler} from "../../helpers/onImageHandler";
import {useController, useForm} from "react-hook-form";
import {useImageViewer} from "../../hooks/imageViewer";
import Col from "react-bootstrap/Col";
import {
    AcceptRequestToMyTeam,
    createTeam,
    getOneTeam,
    getParticipants,
    getRequests, kickUser,
    updateTeam
} from "../../services/team";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import Select from "react-select";
import {GetDiscipline} from "../../services/params";
import {useAppAction} from "../../store";
import {useUserAction} from "../../store/slices/user/actions";
import ParticipantMyCommand from "../../components/utils/ParticipantMyCommand";
import {OnClickForm} from "./helpers/onClickForm";

const CommandEditPage = () => {
    const {id} = useParams()
    const [command, setCommand] = useState()
    const [acceptUsers, setAcceptUsers] = useState()
    const [requestUsers, setRequestUsers] = useState()
    const [setImageToNull, setSetImageToNull] = useState(false)
    const [avatar, setAvatar] = useState(null)
    const photo = useImageViewer(avatar?.image)
    const [categoriesOptions, setCategories] = useState()
    const {setAlert} = useAppAction()
    const {handleSubmit, register, formState: {errors}, setValue, control} = useForm()
    const [SubmitUserClick] = OnClickForm(avatar, setImageToNull)

    const {field: {value: disciplineIdValue, onChange: disciplineIdOnChange, ...disciplineIdField}}
        = useController({name: 'disciplineId', control, rules: {required: 'Выберите значение'}});

    useEffect(() => {
        if (id){
            getOneTeam(id).then(setCommand)
            getRequests(id).then(setRequestUsers)
            getParticipants(id).then(setAcceptUsers)
        }
    }, [id])

    useEffect(()=>{
        if(command){
            setValue('name', command?.name)
            setValue('disciplineId', categoriesOptions?.find(element=>element.value==command.disciplineId))
        }
    }, [command, categoriesOptions])

    useEffect(() => {
        GetDiscipline().then(res => {
            if (res) {
                const categ = res.map((element) => ({value: element.id, label: element.name}))
                setCategories(categ)
            }
        })
    }, [])

    const DelImage = () => {
        setAvatar(null)
        setSetImageToNull(true)
    }

    const onAccept=async (userId)=>{
        AcceptRequestToMyTeam({userId, teamId:id}).then(res=>{
            setAlert({message:'Пользователь добавлен в команду', typeAlert:'good'})
            getRequests(id).then(setRequestUsers)
            getParticipants(id).then(setAcceptUsers)
        })
    }

    const onKick=async (userId)=>{
        kickUser({userId, teamId:id}).then(()=>{
            setAlert({message:'Пользователь удален из команды', typeAlert:'good'})
            getRequests(id).then(setRequestUsers)
            getParticipants(id).then(setAcceptUsers)
        })
    }

    return (
        <section className='account-box'>
            <h1>{id ? 'Редактирование' : 'Создание'}</h1>
            <form onSubmit={handleSubmit(SubmitUserClick)}>
                <Row className={'mb-3'}>
                    <Col sm={8} md={6} xl={6}>
                        <img className={'img-profile w-100'}
                             src={avatar ? photo?.data_url : checkPhotoPath(setImageToNull ? '' : command?.image, true, true)}/>
                        <div className={'d-flex gap-2 mt-2'}>
                            <div className="file-upload">
                                <button className="btn-4">Загрузить фото</button>
                                <input type="file" onChange={(e) => {
                                    setSetImageToNull(false)
                                    onImageHandler(e, setAvatar, 'image')
                                }}/>
                            </div>
                            {
                                (photo || command?.image)
                                &&
                                <input type={'button'} onClick={DelImage} className={'btn-5'} value={'Удалить фото'}/>
                            }
                        </div>
                    </Col>
                    <Col className={'d-flex justify-content-center align-items-start py-3'}>
                        <Row>
                            <ValidateWrapper error={errors?.name}>
                                <input type="text" className='mb-3' placeholder='Название'
                                       {...register('name', {
                                           required: 'Поле обязательно к заполнению',
                                           minLength: {value: 2, message: 'Минимальная длина 2 символа',},
                                           maxLength: {value: 50, message: 'Максимальная длина 50 символов',},
                                       })}
                                />
                            </ValidateWrapper>
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
                        </Row>
                    </Col>
                </Row>
                {id && requestUsers?.length>0 &&
                    <div className={'py-2'}>
                        <fieldset>
                            <legend className='mb-0'>Заявки</legend>
                            <ul className='list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-3 g-md-4'>
                                {requestUsers?.map((element, index) =>
                                    <li key={index}>
                                        <ParticipantMyCommand
                                            isJoin={false}
                                            {...element.user}
                                            onChange={onAccept}
                                        />
                                    </li>
                                )}
                            </ul>
                        </fieldset>
                    </div>
                }
                {id && acceptUsers?.length>0 &&
                    <div className={'py-2'}>
                        <fieldset>
                            <legend className='mb-0'>Участники</legend>
                            <ul className='list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-3 g-md-4'>
                                {acceptUsers?.map((element, index) =>
                                    <li key={index}>
                                        <ParticipantMyCommand
                                            {...element}
                                            isJoin={true}
                                            onChange={onKick}
                                        />
                                    </li>
                                )}
                            </ul>
                        </fieldset>
                    </div>
                }
                <button type='submit' className='btn-4 mb-4'>
                    {id ? 'Редактировать' : 'Создать'}
                </button>
            </form>
        </section>
    );
};

export default CommandEditPage;