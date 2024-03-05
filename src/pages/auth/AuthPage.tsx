import { isUserLoggedin } from "@/lib/IsUserLoggedin";
import { JournalPage } from "..";
import { Signup, Footer, Login } from "@/components";

export default function AuthPage({ path }: { path: string }) {

    if (isUserLoggedin) {
        return <JournalPage />
    } else if (path === 'in') {
        return (
            <>
                <Login />
                <Footer />
            </>
        )
    } else if (path === 'up') {
        return (
            <>
                <Signup />
                <Footer />
            </>
        )
    }

}
