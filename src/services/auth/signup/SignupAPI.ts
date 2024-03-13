import { ID, Account } from 'appwrite';
import { client } from '@/backend/appwrite/config';
import { signupTypes } from '@/types/formTypes';

export default async function SignupAPI(
    data: signupTypes,
    setIsSubmitting: (value: boolean) => void,
    setAlertError_State_Signup: (value: boolean) => void,
    setAlertError_Code_Signup: (value: number) => void,
    setAlertError_Title_Signup: (value: string) => void,
    setAlertError_Sound: (value: boolean) => void,
    setSignupState: (value: boolean) => void,
) {

    const account = new Account(client);

    await account.create(
        ID.unique(),
        data.email,
        data.password,
        data.username,
    ).then((res) => {
        setSignupState(true)
        setIsSubmitting(false)
        setAlertError_State_Signup(false)
        console.log(res)
    }, (error) => {
        setIsSubmitting(false)
        setAlertError_State_Signup(true)
        setAlertError_Code_Signup(error.code)
        setAlertError_Title_Signup(error.type)
        setAlertError_Sound(true)
        console.log('error code:', error.code)
    })

}
