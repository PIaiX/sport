import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {Controller, useForm} from "react-hook-form";
import {MyEditor} from "../../components/MyEditor/MyEditor";
import {useImageViewer} from "../../hooks/imageViewer";
import {checkPhotoPath} from "../../helpers/checkPhotoPath";
import {onImageHandler} from "../../helpers/onImageHandler";
import {CreateOneNew, EditOneNew, GetOneNew} from "../../services/news";

const AddNew = () => {
    const {id} = useParams()
    const [avatar, setAvatar] = useState(null)
    const photo = useImageViewer(avatar?.image)
    const [setImageToNull, setSetImageToNull] = useState(false)
    const [oneNew, setOneNew] = useState()
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
            GetOneNew(id).then(res => {
                res && setOneNew(res)
            })
        }
    }, [])
    useEffect(() => {
        if (oneNew) {
            console.log(oneNew)
            setValue('title', oneNew?.title)
            setValue('description', oneNew?.description)
        }
    }, [oneNew])
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
            EditOneNew(id, formData)
                .then(res => {
                    res && navigate('/account/news')
                })
        } else
            CreateOneNew(formData)
                .then(res => {
                    res && navigate('/account/news')
                })
    }
    const DelImage = () => {
        setAvatar(null)
        setSetImageToNull(true)
    }

    return (
        <section className='account-box'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
                <h1 className='mb-sm-0'>Создание новости</h1>
            </div>
            <form onSubmit={handleSubmit(CreateNew)}>
                <Row className={'mb-3'}>
                    <img className={'col-sm-8 col-md-6 col-xl-5 img-event'}
                         src={avatar ? photo?.data_url : checkPhotoPath(setImageToNull ? '' : oneNew?.image, true, true)}
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
                            (photo || oneNew?.image)
                            && <input type={'button'} onClick={DelImage} className={'btn-5'} value={'Удалить фото'}/>
                        }
                    </div>
                </Row>

                <Row>
                    <legend>Название</legend>
                    <ValidateWrapper error={errors?.title}>
                    <textarea className='mb-3' placeholder='Название'
                              {...register('title', {
                                  required: 'Поле обязательно к заполнению',
                                  minLength: {value: 2, message: 'Минимальная длина 2 символа',},
                                  maxLength: {value: 150, message: 'Максимальная длина 150 символов',},
                              })}
                    />
                    </ValidateWrapper>
                </Row>
                <Row>
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

export default AddNew;