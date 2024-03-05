export interface Interface_useStore_AlertError_Signup {
    AlertError_Sound: boolean;
    AlertError_State_Signup: boolean;
    AlertError_Code_Signup: number;
    AlertError_Title_Signup: string;
    AlertError_Description_Signup: string; 
    setAlertError_Sound: (newState: boolean) => void;
    setAlertError_State_Signup: (newState: boolean) => void;
    setAlertError_Code_Signup: (newCode: number) => void;
    setAlertError_Title_Signup: (newTitle: string) => void;
    setAlertError_Description_Signup: (newDescription: string) => void;
}