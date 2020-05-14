import React from 'react';

import { Route, Switch } from 'react-router-dom';

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

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth/signin" component={Signin} />
    <Route path="/auth/signup" component={SignUp} />
    <Route path="/auth/forgot-password" component={ForgotPassword} />
    <Route path="/auth/reset-password" component={ResetPassword} />
    <Route path="/auth/confirm-email" component={ConfirmEmail} />
    <Route path="/auth/confirmed-email" component={ConfirmedEmail} />
    <Route path="/auth/resend-email" component={ResendEmail} />
    <Route path="/registry/company/create-company" component={CreateCompany} />
    <Route path="/registry/company/update" component={CompanyUpdate} />
    <Route exact path="/companies" component={ListCompanies} />
    <Route path="/companies/find-one" component={CompanyPage} />
  </Switch>
);

export default Routes;
