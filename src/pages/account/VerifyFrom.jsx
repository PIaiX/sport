import React, {useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {RiLogoutBoxRLine} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {logout, verification} from "../../store/slices/user/actions";
import {useForm} from "react-hook-form";
import ValidateWrapper from "../../components/utils/ValidateWrapper";
import {useAppAction, useAppSelector} from "../../store";

const VerifyFrom = () => {
    const dispatch = useDispatch()
    const {handleSubmit, register, formState:{errors}, setValue, setError, clearErrors} = useForm()
    const user = useAppSelector(state => state.user.user)
    const error = useAppSelector(state => state.user.error)
    const LogOut = ()=>{
        dispatch(logout())
    }
    const SubmitUserClick = ({code}) => {
        dispatch(verification(code))
        setTimeout(()=>{            setError('code', {message:'Неверный код'})
        }, 1000)
    }

    useEffect(()=>{
        setValue('email', user?.email)
    }, [user])

    useEffect(()=>{
        if(error == 'code')
            setError('code', {message:'Неверный код'})
        else
            clearErrors('code')
    }, [error])

    return (
        <main className="account">
            <Container>
                <section className="">
                    <Row className='gx-0'>
                        <Col xs={12} lg={3}>
                            <nav className='account-menu'>
                                <ul>
                                    <li>
                                        <button type='button' onClick={LogOut}>
                                            <RiLogoutBoxRLine className='d-sm-none'/>
                                            <span className='d-none d-sm-inline'>Выход</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </Col>
                        <Col xs={12} lg={9}>
                            <section className='account-box'>
                                <h1>Подтверждение аккаунта</h1>
                                <form onSubmit={handleSubmit(SubmitUserClick)}>
                                    <Row className='gx-4 gx-xxl-5'>
                                        <Col md={6}>
                                            <fieldset>
                                                <Row className='gx-4 gy-2 gy-sm-3 align-items-center'>
                                                    <Col md={3}>
                                                        Почта
                                                    </Col>
                                                    <Col md={9}>
                                                        <ValidateWrapper error={errors?.email}>
                                                            <input type="email" placeholder='Email'
                                                                   {...register('email', {
                                                                       required: 'Поле обязательно к заполнению',
                                                                   })}
                                                            />
                                                        </ValidateWrapper>
                                                    </Col>
                                                    <Col md={3}>
                                                        Код
                                                    </Col>
                                                    <Col md={9}>
                                                        <ValidateWrapper error={errors?.code}>
                                                        <input type="text" placeholder='Введите код с почты' autoComplete="new-password"
                                                               {...register('code', {
                                                                   required: 'Поле обязательно к заполнению',
                                                               })}
                                                        />
                                                        </ValidateWrapper>
                                                    </Col>

                                                </Row>
                                            </fieldset>
                                        </Col>
                                    </Row>
                                    <button type='submit' className='btn-1'>Отправить</button>
                                </form>
                            </section>
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default VerifyFrom;