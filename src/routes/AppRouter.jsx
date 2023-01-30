import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import About from '../pages/About'
import AllNews from '../pages/AllNews'
import EventPage from '../pages/EventPage'
import Home from '../pages/Home'
import NewsPage from '../pages/NewsPage'
import NotFound from '../pages/NotFound'

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path="event" element={<EventPage/>} />
            <Route path="all-news" element={<AllNews/>} />
            <Route path="news" element={<NewsPage/>} />
            <Route path="about" element={<About/>} />
            <Route path="*" element={<NotFound/>} />
        </Route>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter