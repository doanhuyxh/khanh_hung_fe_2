'use client';

import GuestActions from './Actions/GuestActions';
import UserActions from './Actions/UserActions';
import { Customer } from '@/app/_libs/types';

const Auth = ({isLogin, user}: {isLogin: boolean, user: Customer}) => {

  if (!isLogin) {
    return <GuestActions />;
  } else {
    return <UserActions user={user} />;
  }
};

export default Auth;
