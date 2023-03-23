import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {useForm} from "react-hook-form";
import ValidateWrapper from "../components/utils/ValidateWrapper";
import {useDispatch} from "react-redux";
import {login} from "../store/slices/user/actions";
import {useAppSelector} from "../store";

const Login = () => {
    const dispatch = useDispatch()
    const {auth, loginError} = useAppSelector(state => state.user)
    const {register, formState: {errors}, handleSubmit, getValues} = useForm()

    useEffect(()=>{
        // loginError && alert("Неверные данные для входа")
    }, [loginError])
    const SubmitClick = (data) => {
        dispatch(login(data))
    }
    return (
        <main>
            <Container>
                <section className='py-4 py-md-5'>
                    <div className="d-flex align-items-baseline justify-content-center">
                        <h1>Вход</h1>
                        <span className='fs-20 mx-3'>/</span>
                        <h3><Link to='/registration' className='link bb-dot'>Регистрация</Link></h3>
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
                        <ValidateWrapper error={errors?.password}>
                            <input className='mb-3' type="password" placeholder='пароль'
                                   {...register('password', {
                                       required: 'Поле обязательно к заполнению',
                                   })}
                            />
                        </ValidateWrapper>

                        <input type={'submit'} className='btn-1 w-100' value={'Войти'}/>
                        <label className='mt-3'>
                            <input type="checkbox"/>
                            <span className='color-main'>Запомнить меня</span>
                        </label>
                    </form>
                </section>
            </Container>
        </main>
    );
};

export default Login;