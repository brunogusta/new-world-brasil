import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Signin from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import ConfirmEmail from '../pages/ConfirmEmail';
import ConfirmedEmail from '../pages/ConfirmedEmail';
import ResendEmail from '../pages/ResendEmail';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth/signin" component={Signin} />
    <Route path="/auth/signup" component={SignUp} />
    <Route path="/auth/forgot_password" component={ForgotPassword} />
    <Route path="/auth/reset_password" component={ResetPassword} />
    <Route path="/auth/confirm_email" component={ConfirmEmail} />
    <Route path="/auth/confirmed_email" component={ConfirmedEmail} />
    <Route path="/auth/resend_email" component={ResendEmail} />
  </Switch>
);

export default Routes;
