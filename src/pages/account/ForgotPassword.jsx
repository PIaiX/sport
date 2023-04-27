import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {sendLinkOnEmailForChangePassword} from "../../services/user";
import {FcSportsMode} from "react-icons/fc";

const ForgotPassword = () => {
    const [sended, setSended] = useState(false)
    const {register, formState: {errors}, handleSubmit} = useForm()

    const SubmitClick = (data) => {
        sendLinkOnEmailForChangePassword(data).then(res => {
            if (res)
                setSended(true)
        })
    }
    if (sended) {
        return (
            <main>
                <Container>
                    <section className='not-found py-4 py-md-5'>
                        <div>
                            <h2 className='mb-4'>Сообщение отправлено на почту</h2>
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
                            <h1>Восстановление пароля</h1>
                        </div>

                        <form action="" className='form-login' onSubmit={handleSubmit(SubmitClick)}>
                            <ValidateWrapper error={errors?.email}>
                                <input className='mb-3' type="email" placeholder='email'
                                       {...register('email', {
                                           required: 'Поле обязательно к заполнению',
                                           minLength: {value: 2, message: 'Минимум 2 символа'}
                                       })}
                                />
                            </ValidateWrapper>
                            <input type={'submit'} className='btn-1 w-100' value={'Отправить код на почту'}/>
                        </form>
                    </section>
                </Container>
            </main>
        );
};

export default ForgotPassword;