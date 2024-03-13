import { Account } from 'appwrite';
import { client } from '@/backend/appwrite/config';
import { loginTypes } from '@/types/formTypes';


export default async function LoginAPI(
    data: loginTypes,
    setIsSubmitting: (value: boolean) => void,
    setAlertError_State_Login: (value: boolean) => void,
    setAlertError_Code_Login: (value: number) => void,
    setAlertError_Title_Login: (value: string) => void,
    setAlertError_Sound: (value: boolean) => void,
    setLoginState: (value: boolean) => void,
) {


    const account = new Account(client);

    await account.createEmailSession(
        data.email,
        data.password,
    ).then((res) => {
        setLoginState(true)
        setIsSubmitting(false)
        setAlertError_State_Login(false)
        setAlertError_Sound(false)
        console.log(res)
    }, (error) => {
        setLoginState(false); 
        setIsSubmitting(false)
        setAlertError_State_Login(true)
        setAlertError_Code_Login(error.code)
        setAlertError_Title_Login(error.type)
        setAlertError_Sound(true)
        console.log('error code:', error.code)
    })

}








