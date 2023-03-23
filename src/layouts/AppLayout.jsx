import React, {useEffect} from 'react'
import {Outlet, ScrollRestoration, useLocation} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NotFound from "../pages/NotFound";
import {useAppAction, useAppSelector} from "../store";
import {useDispatch} from "react-redux";
import {initFingerprint} from "../store/slices/app/Action";
import {refreshAuth} from '../store/slices/user/actions'

const AppLayout = () => {
    const {fingerprint, notFound}=useAppSelector(state=>state.app)
    const {setNotFound, CheckedBad} = useAppAction()
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    useEffect(()=>{
        setNotFound(false)
    }, [pathname])

    useEffect(()=>{
        if (fingerprint) {
            localStorage.setItem('fingerprint', fingerprint)
            if (localStorage.getItem('token'))
                dispatch(refreshAuth())
            else
                dispatch(CheckedBad())
        } else dispatch(initFingerprint())

    }, [fingerprint])

    return (
        <>
            <ScrollRestoration />
            <Header />
            {notFound?
                <NotFound/>
                :<Outlet />
            }
            <Footer />
        </>
    )
}

export default AppLayout