import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';

import Home from '../pages/Home';
import Signin from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import ConfirmEmail from '../pages/auth/ConfirmEmail';
import ConfirmedEmail from '../pages/auth/ConfirmedEmail';
import ResendEmail from '../pages/auth/ResendEmail';
import CreateCompany from '../pages/CreateCompany';
import ListCompanies from '../pages/ListCompanies';
import CompanyPage from '../pages/CompanyPage';
import CompanyUpdate from '../pages/CompanyUpdate';
import NewPost from '../pages/NewPost';
import UserProfile from '../pages/UserProfile';
import NotFound404 from '~/pages/NotFound404.js';
import GuidesList from '~/pages/GuidesList';
import GuidePage from '~/pages/GuidePage';
import api from '~/services/api';

import { Types as UserData } from '~/store/ducks/userData';

import ScrollToTop from './ScrollToTop';

const Routes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem('TOKEN_KEY');
      if (token) {
        await api.get('/auth/validate-token').catch(({ response }) => {
          if (response && response.data && response.data.expired) {
            localStorage.clear();
            dispatch({
              type: UserData.CLEAR_DATA,
            });
          }
        });
      }
    }

    return fetchData();
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <Switch>
        <PrivateRoute path="/new-post" component={NewPost} />
        <Route exact path="/" component={Home} />
        <Route path="/auth/signin" component={Signin} />
        <Route path="/auth/signup" component={SignUp} />
        <Route path="/auth/forgot-password" component={ForgotPassword} />
        <Route path="/auth/reset-password/:token" component={ResetPassword} />
        <Route path="/auth/confirm-email" component={ConfirmEmail} />
        <Route path="/auth/confirmed-email/:token" component={ConfirmedEmail} />
        <Route path="/auth/resend-email" component={ResendEmail} />
        <Route
          path="/registry/company/create-company"
          component={CreateCompany}
        />
        <Route path="/registry/company/update" component={CompanyUpdate} />
        <Route path="/companies/all/:page" component={ListCompanies} />
        <Route path="/companies/find-one/:id" component={CompanyPage} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/list-guides" component={GuidesList} />
        <Route path="/guide/:id" component={GuidePage} />
        <Route component={NotFound404} />
      </Switch>
    </>
  );
};

export default Routes;
