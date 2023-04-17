import React from 'react';
import {Link, useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {Controller, useForm} from "react-hook-form";
import {MyEditor} from "../../components/MyEditor/MyEditor";

const AddNew = () => {
    const {id} = useParams()
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

    const CreateNew = (data) => {
        console.log(data)
    }

    return (
        <section className='account-box'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
                <h1 className='mb-sm-0'>Создание новости</h1>
            </div>
            <form onSubmit={handleSubmit(CreateNew)}>
                <Row>
                    <legend>Название</legend>
                    <ValidateWrapper error={errors?.name}>
                    <textarea className='mb-3' placeholder='Название'
                              {...register('name', {
                                  required: 'Поле обязательно к заполнению',
                                  minLength: {value: 2, message: 'Минимальная длина 2 символа',},
                                  maxLength: {value: 50, message: 'Максимальная длина 50 символов',},
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
                        {id?'Редактировать':'Создать'}
                    </button>
                </Row>
            </form>
        </section>
    );
};

export default AddNew;