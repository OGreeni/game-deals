import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MainNav from './components/navigation/MainNav';
import MainContent from './components/index/MainContent';
import AboutContent from './components/about/AboutContent';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';
import AccountContent from './components/account/AccountContent';
import NotFound from './404/NotFound';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userId = useSelector((state) => state.auth.userId);

  return (
    <>
      <MainNav />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<AboutContent />} />
        {!isLoggedIn && (
          <>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </>
        )}
        {isLoggedIn && (
          <Route path={`/account/${userId}`} element={<AccountContent />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
