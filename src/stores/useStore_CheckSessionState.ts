import { create } from 'zustand';
import { Interface_useStore_CheckSessionState } from '@/interfaces/Interface_useStore_CheckSessionState';

export const useStore_CheckSessionState = create<Interface_useStore_CheckSessionState>((set) => ({
    CheckSessionState: false,
    setCheckSessionState: (newState: boolean) => set({
        CheckSessionState: newState
    })
}))