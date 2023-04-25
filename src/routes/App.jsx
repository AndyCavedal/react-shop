import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import NewPassword from '../pages/NewPassword';
import '../styles/global.css';
import SendEmail from '../pages/SendEmail';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import EditAccount from '../pages/EditAccount';
import PasswordRecovery from '../pages/PasswordRecovery';
import Orders from '../pages/Orders';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/recovery-password' element={<RecoveryPassword />} />
                    <Route exact path='/password-recovery' element={<PasswordRecovery />} />
                    <Route exact path='/send-email' element={<SendEmail />} />
                    <Route exact path='/new-password' element={<NewPassword />} />
                    <Route exact path='/edit-account' element={<EditAccount />} />
                    <Route exact path='/create-account' element={<CreateAccount />} />
                    <Route exact path='/checkout' element={<Orders />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;