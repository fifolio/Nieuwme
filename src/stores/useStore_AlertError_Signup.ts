import {create} from 'zustand';
import { Interface_useStore_AlertError_Signup } from '@/interfaces/Interface_useStore_AlertError_Signup';

export const useStore_AlertError_Signup = create<Interface_useStore_AlertError_Signup>()((set) => ({
    AlertError_Sound: false,
    AlertError_State_Signup: false,
    AlertError_Code_Signup: 0,
    AlertError_Title_Signup: 'Oops!',
    AlertError_Description_Signup: "There's something wrong, please try again later.",

    setAlertError_Sound: (newState) => set({
        AlertError_Sound: newState
    }),

    setAlertError_State_Signup: (newState) => set({
        AlertError_State_Signup: newState
    }),

    setAlertError_Code_Signup: (newCode) => set({
        AlertError_Code_Signup: newCode
    }),

    setAlertError_Title_Signup: (newTitle) => set({
        AlertError_Title_Signup: newTitle
    }),
    setAlertError_Description_Signup: (newDescription) => set({
        AlertError_Description_Signup: newDescription
    }),
}))