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
import CreateGuild from '../pages/CreateGuild';
import ListGuilds from '../pages/ListGuilds';
import GuildPage from '../pages/GuildPage';

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
    <Route path="/registry/create_guild" component={CreateGuild} />
    <Route exact path="/guilds" component={ListGuilds} />
    <Route path="/guilds/find-one" component={GuildPage} />
  </Switch>
);

export default Routes;
