import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import {useForm} from "react-hook-form";
import ValidateWrapper from "../components/utils/ValidateWrapper";
import {useDispatch} from "react-redux";
import {useUserAction} from "../store/slices/user/actions";
import {useAppSelector} from "../store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {SlSocialVkontakte} from "react-icons/sl";
import {BsTelegram} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";

const Login = () => {
    const dispatch = useDispatch()
    const loginError = useAppSelector(state => state.user.loginError)
    const {register, formState: {errors}, handleSubmit, setError} = useForm()
    const navigate = useNavigate()
    const {login} = useUserAction()

    useEffect(()=>{
        if(loginError){
            console.log(loginError)
            loginError.indexOf('password')!==-1 && setError('password', {message:'Неверный пароль'})
            loginError.indexOf('email')!==-1 && setError('email', {message:'Неверный email'})
            login(null)
        }
    }, [loginError])
    const SubmitClick = (data) => {
        login(data)
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
                                       minLength:{value:8, message:'Минимум 8 символов'},
                                       required: 'Поле обязательно к заполнению',
                                   })}
                            />
                        </ValidateWrapper>

                        <input type={'submit'} className='btn-1 w-100' value={'Войти'}/>
                        <label className='mt-3'>
                            <input type="checkbox" onChange={()=>{
                                navigate('/password/restore')
                            }} />
                            <span className='color-main'>Забыли пароль</span>
                        </label>
                        <div className='mt-3'>
                            <div className={'d-flex align-items-center gap-5'}>
                                Войти через
                                <div className={'d-flex gap-2'}>
                                    <div className={'bg-white d-flex justify-content-center align-items-center'} style={{width:'50px', height:'50px', borderRadius:'25px'}}>
                                        <SlSocialVkontakte color={'blue'} size={30} />
                                    </div>
                                    <div className={'bg-white d-flex justify-content-center align-items-center'} style={{width:'50px', height:'50px', borderRadius:'25px'}}>
                                        <BsTelegram color={'#32A8E2'} size={30} />
                                    </div>
                                    <div className={'bg-white d-flex justify-content-center align-items-center'} style={{width:'50px', height:'50px', borderRadius:'25px'}}>
                                        <FcGoogle color={'blue'} size={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </Container>
        </main>
    );
};

export default Login;