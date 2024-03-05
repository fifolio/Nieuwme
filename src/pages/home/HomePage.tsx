import { isUserLoggedin } from "@/lib/IsUserLoggedin";
import { JournalPage } from "..";
import { Signup, Footer } from "@/components";

export default function HomePage() {
    return isUserLoggedin ? (
        <JournalPage />
    ) : (
        <>
            <Signup />
            <Footer />
        </>
    )
}
