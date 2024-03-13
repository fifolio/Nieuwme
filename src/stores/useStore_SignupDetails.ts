import { create } from 'zustand';
import { Interface_useStore_SignupDetails } from '@/interfaces/Interface_useStore_SignupDetails';

export const useStore_SignupDetails = create<Interface_useStore_SignupDetails>((set) => ({
    SignupState: false,
    SignupPayload: {
        username: '',
        email: ''
    },
    setSignupState: (newState) => set({
        SignupState: newState
    }),
    setSignupPayload: (newState) => set({
        SignupPayload: newState
    })
}))

