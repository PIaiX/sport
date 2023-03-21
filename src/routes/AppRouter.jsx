import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import About from '../pages/About'
import AllNews from '../pages/AllNews'
import EventPage from '../pages/EventPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NewsPage from '../pages/NewsPage'
import NotFound from '../pages/NotFound'
import Registration from '../pages/Registration'
import AccountRouter from './AccountRouter'
import AuthCheck from "../pages/account/AuthCheck";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path="event/:id" element={<EventPage/>} />
            <Route path="all-news" element={<AllNews/>} />
            <Route path="news/:id" element={<NewsPage/>} />
            <Route path="about" element={<About/>} />
            <Route path="login" element={<AuthCheck><Login/></AuthCheck>} />
            <Route path="registration" element={<AuthCheck><Registration/></AuthCheck>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="account/*" element={<AuthCheck><AccountRouter/></AuthCheck>}/>
            <Route path="test/*" element={<AccountRouter/>}/>
        </Route>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter