import React, {Suspense} from 'react';
import useIsMobile from '../hooks/isMobile';
import {Navigate, Route, Routes} from 'react-router-dom';
import AccountLayout from '../layouts/AccountLayout';
import Profile from '../pages/account/Profile';
import AccountMenu from '../pages/account/AccountMenu';
import NotFound from '../pages/NotFound';
import AccEvents from '../pages/account/AccEvents';
import AddEvent from '../pages/account/AddEvent';
import VerifyCheck from '../pages/account/VerifyCheck';
import {useAppSelector} from "../store";
import EditBanners from "../pages/account/EditBanners";
import EditNews from "../pages/account/EditNews";
import AddNew from "../pages/account/AddNew";
import AddBanner from "../pages/account/AddBanner";
import CommandEditPage from "../pages/CommandEditPage";

const AccountRouter = () => {
    const isAdmin = useAppSelector(state => state?.app?.isAdmin)
    const {isMobile} = useIsMobile('991px');
    return (
        <Routes>
            <Route path='/' element={<VerifyCheck><AccountLayout isMobile={isMobile}/></VerifyCheck>}>
                {isMobile ?
                    <Route index element={<AccountMenu/>}/>
                    : <Route index element={<Navigate to='profile' replace={true}/>}/>
                }
                {isAdmin &&
                    <>
                        <Route path='banners' element={<Suspense><EditBanners/></Suspense>}/>
                        <Route path='banners/add' element={<Suspense><AddBanner/></Suspense>}/>
                        <Route path='banners/add/:id' element={<Suspense><AddBanner/></Suspense>}/>
                        <Route path='news' element={<Suspense><EditNews/></Suspense>}/>
                        <Route path='news/add' element={<Suspense><AddNew/></Suspense>}/>
                        <Route path='news/add/:id' element={<Suspense><AddNew/></Suspense>}/>
                    </>
                    }
                }
                <Route path='profile' element={<Profile/>}/>
                <Route path='events' element={<AccEvents/>}/>
                <Route path='events/add' element={<AddEvent/>}/>
                <Route path='events/:id' element={<AddEvent/>}/>
                <Route path='command/add' element={<CommandEditPage/>}/>
                <Route path='command/:id' element={<CommandEditPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    );
};

export default AccountRouter;