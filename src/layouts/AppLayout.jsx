import React, {useEffect} from 'react'
import {Outlet, ScrollRestoration, useLocation} from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NotFound from "../pages/NotFound";
import {useAppAction, useAppSelector} from "../store";

const AppLayout = () => {
    const {notFound}=useAppSelector(state=>state.app)
    const {setNotFound} = useAppAction()
    const {pathname} = useLocation()

    useEffect(()=>{
        setNotFound(false)
    }, [pathname])

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