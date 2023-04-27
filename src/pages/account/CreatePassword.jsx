import React, {useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {useForm} from "react-hook-form";
import {changePassword} from "../../services/user";
import {FcSportsMode} from "react-icons/fc";

const CreatePassword = () => {
    const {id} = useParams()
    const {register, formState: {errors}, handleSubmit, getValues, setValue, setError} = useForm()
    const [sended, setSended] = useState(false)
    const navigate = useNavigate()

    const SubmitClick = ({repeatPassword, ...otherData}) => {
        changePassword({...otherData, restorePasswordHash: id}).then(res => {
            if (res) {
                setSended(true)
                setTimeout(() => navigate('/login'), 1000)
            } else {
                navigate('/password/restore')
            }
        })

    }
    if (sended) {
        return (
            <main>
                <Container>
                    <section className='not-found py-4 py-md-5'>
                        <div>
                            <h2 className='mb-4'>Пароль успешно изменён</h2>
                            <div className="d-flex">
                                <p className='fs-13'>Рекомендуем Вам вернуться <br/>на главную страницу...</p>
                                <FcSportsMode className='fs-40 ms-4'/>
                            </div>
                            <Link to="/" className='btn-3 fs-11 mt-4 mx-auto mx-md-0'>Перейти на главную</Link>
                        </div>
                    </section>
                </Container>
            </main>
        );
    } else
        return (
            <main>
                <Container>
                    <section className='py-4 py-md-5'>
                        <div className="d-flex align-items-baseline justify-content-center">
                            <h1>Изменение пароля</h1>
                        </div>
                        <form action="" className='form-login' onSubmit={handleSubmit(SubmitClick)}>
                            <ValidateWrapper error={errors?.email}>
                                <input className='mb-3' type="email" placeholder='email'
                                       {...register('email', {
                                           required: 'Поле обязательно к заполнению',
                                       })}
                                />
                            </ValidateWrapper>
                            <ValidateWrapper error={errors?.password}>
                                <input className='mb-3' type="password" placeholder='пароль'
                                       {...register('password', {
                                           minLength: {value: 8, message: 'Минимум 8 символов'},
                                           required: 'Поле обязательно к заполнению',
                                       })}
                                />
                            </ValidateWrapper>
                            <ValidateWrapper error={errors?.repeatPassword}>
                                <input className='mb-3' type="repeatPassword" placeholder='повторите пароль'
                                       {...register('repeatPassword', {
                                           required: 'Поле обязательно к заполнению',
                                           validate: value => value == getValues('password') ? true : 'пароли не совпадают'
                                       })}

                                />
                            </ValidateWrapper>
                            <input type='submit' className='btn-1 w-100' value={'Изменить пароль'}/>
                        </form>
                    </section>
                </Container>
            </main>
        )
};

export default CreatePassword;