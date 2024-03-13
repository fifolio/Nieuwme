export interface Interface_useStore_SignupDetails {
    SignupState: boolean;
    SignupPayload: {
        username: string;
        email: string;
    };
    setSignupState: (newState: boolean) => void;
    setSignupPayload: (newDetails: {
        username: string;
        email: string;
    }) => void;
}