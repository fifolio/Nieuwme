import { create } from 'zustand';
import { Interface_useStore_LoginState } from '@/interfaces/Interface_useStore_LoginState';

export const useStore_LoginState = create<Interface_useStore_LoginState>((set) => ({
    LoginState: false,
    setLoginState: (newState: boolean) => set({
        LoginState: newState
    })
}))