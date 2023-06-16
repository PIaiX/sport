import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import {onImageHandler} from "../helpers/onImageHandler";
import {useForm} from "react-hook-form";
import {useImageViewer} from "../hooks/imageViewer";
import Col from "react-bootstrap/Col";
import ParticipantControl from "../components/utils/ParticipantControl";

const a = [
    {
        id: 8,
        email: 'user@gmail.com',
        role: 'USER',
        firstName: 'user',
        image: 'users/d769730f-1712-4fcd-acfb-91f8bae98d18-23.03png.png',
        lastName: 'user',
        gender: true,
        isVerified: true,
        isPublicProfile: true,
        birthDate: '1997-01-23T21:00:00.000Z',
        height: 0,
        weight: 99,
        phone: +79876543210,
        address: null,
        city: null,
        district: null,
        region: null
    },
    {
        id: 8,
        email: 'user@gmail.com',
        role: 'USER',
        firstName: 'user',
        image: 'users/d769730f-1712-4fcd-acfb-91f8bae98d18-23.03png.png',
        lastName: 'user',
        gender: true,
        isVerified: true,
        isPublicProfile: true,
        birthDate: '1997-01-23T21:00:00.000Z',
        height: 0,
        weight: 99,
        phone: +79876543210,
        address: null,
        city: null,
        district: null,
        region: null
    }

]
const CommandEditPage = () => {
    const {id} = useParams()
    const [command, setCommand] = useState()
    const [acceptUsers, setAcceptUsers] = useState(a)
    const [setImageToNull, setSetImageToNull] = useState(false)
    const [avatar, setAvatar] = useState(null)
    let photo = useImageViewer(avatar?.image)
    const {handleSubmit, register, formState: {errors}, setValue, clearErrors, getValues, control} = useForm()

    const SubmitUserClick = ({password, gender, birthDate, ...data}) => {
        let request = {...data, gender: gender?.value, birthDate: birthDate + 'T21:00:00.000Z'}
        const formData = new FormData()
        for (const key in request) {
            formData.append(key, request[key])
        }
        formData.append('image', avatar?.image)
        if (setImageToNull)
            formData.append('setImageToNull', true)
    }

    const DelImage = () => {
        setAvatar(null)
        setSetImageToNull(true)
    }

    return (
        <section className='account-box'>
            <h1>{id ? 'Редактирование' : 'Создание'}</h1>
            <form onSubmit={handleSubmit(SubmitUserClick)}>
                <Row className={'mb-3'}>
                    <Col sm={8} md={6} xl={6}>
                        <img className={'img-profile w-100'}
                             src={avatar ? photo?.data_url : checkPhotoPath(setImageToNull ? '' : command?.image, true)}/>
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
                        <input placeholder={'Название'}/>
                    </Col>
                </Row>
                <div className={'py-2'}>
                    <fieldset>
                        <legend className='mb-0'>Заявки</legend>
                        <ul className='list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-3 g-md-4'>
                            {acceptUsers?.map((element, index) =>
                                <li key={index}>
                                    <ParticipantControl
                                        {...element}
                                        eventId={111111111111111111}
                                        onChange={() => {
                                            alert('Добавить')
                                        }}
                                    />
                                </li>
                            )}
                        </ul>
                    </fieldset>
                </div>

                <button type='submit' className='btn-4 mb-4'>
                    {id ? 'Редактировать' : 'Создать'}
                </button>
            </form>
        </section>
    );
};

export default CommandEditPage;