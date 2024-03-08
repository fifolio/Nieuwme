import {create} from 'zustand';
import { Interface_useStore_AlertError_Login } from '@/interfaces/Interface_useStore_AlertError_Login';

export const useStore_AlertError_Login = create<Interface_useStore_AlertError_Login>()((set) => ({
    AlertError_Sound: false,
    AlertError_State_Login: false,
    AlertError_Code_Login: 0,
    AlertError_Title_Login: 'Oops!',
    AlertError_Description_Login: "There's something wrong, please try again later.",

    setAlertError_Sound: (newState) => set({
        AlertError_Sound: newState
    }),

    setAlertError_State_Login: (newState) => set({
        AlertError_State_Login: newState
    }),

    setAlertError_Code_Login: (newCode) => set({
        AlertError_Code_Login: newCode
    }),

    setAlertError_Title_Login: (newTitle) => set({
        AlertError_Title_Login: newTitle
    }),
    setAlertError_Description_Login: (newDescription) => set({
        AlertError_Description_Login: newDescription
    }),
}))