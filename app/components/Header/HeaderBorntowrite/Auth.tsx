import GuestActions from './Actions/GuestActions';
import UserActions from './Actions/UserActions';
import { Customer } from '@/app/libs/types';
import fetchDataServer from "@/app/libs/configs/fetchDataServer";
import { cookies } from 'next/headers'

const Auth = async () => {

    const cookie = await cookies()
    const accToken = cookie.get('AccessToken')
    const isLogin = accToken ? true : false
    const user = {} as Customer;

    if (isLogin){
        console.log("cookies.toString():: ",cookies.toString())
        const resUserInfo = await fetchDataServer("/customer/get-info", "");
        console.log("resUserInfo: ", resUserInfo);
    }
    if (!isLogin) {
        return <GuestActions />;
    } else {
        return <UserActions user={user} />;
    }
};

export default Auth;
