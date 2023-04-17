import React from 'react';
import Row from "react-bootstrap/Row";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

const AddBanner = () => {
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

    const CreateBanner = (data) => {
        console.log(data)
    }

    return (
        <section className='account-box'>
            <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
                <h1 className='mb-sm-0'>Создание новости</h1>
            </div>
            <form onSubmit={handleSubmit(CreateBanner)}>
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
            </form>
        </section>
    );
};

export default AddBanner;