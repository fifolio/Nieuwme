export interface Interface_useStore_AlertError_Login {
    AlertError_Sound: boolean;
    AlertError_State_Login: boolean;
    AlertError_Code_Login: number;
    AlertError_Title_Login: string;
    AlertError_Description_Login: string; 
    setAlertError_Sound: (newState: boolean) => void;
    setAlertError_State_Login: (newState: boolean) => void;
    setAlertError_Code_Login: (newCode: number) => void;
    setAlertError_Title_Login: (newTitle: string) => void;
    setAlertError_Description_Login: (newDescription: string) => void;
}