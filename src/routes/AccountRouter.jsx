import React from 'react';
import useIsMobile from '../hooks/isMobile';
import {Navigate, Route, Routes} from 'react-router-dom';
import AccountLayout from '../layouts/AccountLayout';
import Profile from '../pages/account/Profile';
import AccountMenu from '../pages/account/AccountMenu';
import NotFound from '../pages/NotFound';
import AccEvents from '../pages/account/AccEvents';

const AccountRouter = () => {
  const {isMobile} = useIsMobile('991px');

  return (
    <Routes>
      <Route path="/" element={<AccountLayout isMobile={isMobile} />}>
        {isMobile ? (
            <Route index element={<AccountMenu />} />
        ) : (
            <Route index element={<Navigate to="profile" replace={true} />} />
        )}
        <Route path="profile" element={<Profile />} />
        <Route path="events" element={<AccEvents/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
};

export default AccountRouter;