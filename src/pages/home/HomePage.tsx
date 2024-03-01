import Login from "@/components/forms/login/Login";
import { isUserLoggedin } from "@/lib/IsUserLoggedin";
import { JournalPage } from "..";

export default function HomePage() {
 return isUserLoggedin ? (<JournalPage />) : (<Login />)
}
