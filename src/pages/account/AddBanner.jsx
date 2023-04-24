import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {useNavigate, useParams} from "react-router-dom";
import {Controller, useForm} from "react-hook-form";
import {MyEditor} from "../../components/MyEditor/MyEditor";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import {useImageViewer} from "../../hooks/imageViewer";
import {onImageHandler} from "../../helpers/onImageHandler";
import {CreateOneNew, EditOneNew, GetOneNew} from "../../services/news";
import {CreateOneBanner, EditOneBanner, GetOneBanner} from "../../services/banners";

const AddBanner = () => {
    const {id} = useParams()
    const [avatar, setAvatar] = useState(null)
    const photo = useImageViewer(avatar?.image)
    const [setImageToNull, setSetImageToNull] = useState(false)
    const [oneBanner, setOneBanner] = useState()
    const navigate = useNavigate()
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

    useEffect(() => {
        if (id) {
            GetOneBanner(id).then(res => {
                res && setOneBanner(res)
            })
        }
    }, [])
    useEffect(() => {
        if (oneBanner) {
            console.log(oneBanner)
            setValue('description', oneBanner?.description)
        }
    }, [oneBanner])
    const CreateNew = (data) => {
        const formData = new FormData()
        for (const key in data) {
            formData.append(key, data[key])
        }
        if (setImageToNull)
            formData.append('setImageToNull', true)
        else
            formData.append('image', avatar?.image)
        if (id) {
            EditOneBanner(id, formData)
                .then(res => {
                    res && navigate('/account/banners')
                })
        } else
            CreateOneBanner(formData)
                .then(res => {
                    res && navigate('/account/banners')
                })
    }
    const DelImage = () => {
        setAvatar(null)
        setSetImageToNull(true)
    }

    return (
        <section className='account-box'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
                <h1 className='mb-sm-0'>Создание баннера</h1>
            </div>
            <form onSubmit={handleSubmit(CreateNew)}>
                <Row className={'mb-3'}>
                    <img className={'col-sm-8 col-md-6 col-xl-5 img-event'}
                         src={avatar ? photo?.data_url : checkPhotoPath(setImageToNull ? '' : oneBanner?.image, true, true)}
                    />
                    <div className={'d-flex gap-2 mt-2'}>
                        <div className="file-upload">
                            <button className="btn-4">Загрузить фото</button>
                            <input type="file" onChange={(e) => {
                                setSetImageToNull(false)
                                onImageHandler(e, setAvatar, 'image')
                            }}/>
                        </div>
                        {
                            (photo || oneBanner?.image)
                            && <input type={'button'} onClick={DelImage} className={'btn-5'} value={'Удалить фото'}/>
                        }
                    </div>
                </Row>

                <Row>
                    <legend>Название</legend>
                    <ValidateWrapper error={errors?.description}>
                    <textarea className='mb-3' placeholder='Название'
                              {...register('description', {
                                  required: 'Поле обязательно к заполнению',
                                  minLength: {value: 2, message: 'Минимальная длина 2 символа',},
                                  maxLength: {value: 150, message: 'Максимальная длина 150 символов',},
                              })}
                    />
                    </ValidateWrapper>
                </Row>
                <Row>
                    <button type='submit' className='btn-4 mb-4 mt-2'>
                        {id ? 'Редактировать' : 'Создать'}
                    </button>
                </Row>
            </form>
        </section>
    );
};

export default AddBanner;