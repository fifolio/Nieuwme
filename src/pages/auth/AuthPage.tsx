// import { useStore_CheckSessionState } from "@/stores/useStore_CheckSessionState";
import { Signup, Footer, Login } from "@/components";


export default function AuthPage({ path }: { path: string }) {

    // const { CheckSessionState } = useStore_CheckSessionState();

    // if (CheckSessionState) {

    if (path == '/in') {
        return (
            <>
                <Login />
                <Footer />
            </>
        )
    } else if (path == '/up') {
        return (
            <>
                <Signup />
                <Footer />
            </>
        )
    }


}