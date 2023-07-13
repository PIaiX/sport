import React, {useEffect, useLayoutEffect} from 'react'
import {Outlet, ScrollRestoration, useLocation} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NotFound from "../pages/NotFound";
import {useAppAction, useAppSelector} from "../store";
import {useDispatch} from "react-redux";
import {initFingerprint} from "../store/slices/app/Action";
import {getMe, getRequestsCommands, refreshAuth, useUserAction} from '../store/slices/user/actions'
import ChangeLocation from "./ChangeLocation";
import useAnchor from "../hooks/useAnchor";
import Alert from "../components/utils/Alert";

const AppLayout = () => {
    const {fingerprint, notFound} = useAppSelector(state => state.app)
    const {setNotFound, CheckedBad} = useAppAction()
    const {pathname} = useLocation()
    const {myRequests, getMyEvents, getMyOwnCommands, myRequestsCommands, getMyRequests} = useUserAction()
    const [myRef, executeScroll] = useAnchor()
    const dispatch = useDispatch()
    useLayoutEffect(() => {
        setNotFound(false)
    }, [pathname])

    useEffect(() => {
        if (fingerprint) {
            localStorage.setItem('fingerprint', fingerprint)
            if (localStorage.getItem('token'))
                dispatch(refreshAuth()).then(res => {
                    res && dispatch(getMe()).then(res => {
                        if (res) {
                            myRequests()
                            getMyEvents()
                            getMyOwnCommands()
                            getRequestsCommands()
                            getMyRequests()
                        }
                    })
                })
            else
                dispatch(CheckedBad())
        } else dispatch(initFingerprint())

    }, [fingerprint])

    return (
        <>
            <div ref={myRef}></div>
            <ScrollRestoration/>
            <Header/>
            <ChangeLocation>
                {notFound ?
                    <NotFound/>
                    : <Outlet/>
                }
            </ChangeLocation>
            <Alert />
            <Footer/>
            {executeScroll()}
        </>
    )
}

export default AppLayout