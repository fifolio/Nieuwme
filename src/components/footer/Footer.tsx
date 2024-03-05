import { ProjectDetails } from "@/stores/ui/ProjectDetails";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t">
      <div className="container flex flex-col items-center gap-4 px-4 md:px-6 text-sm">
        <div className="flex items-center gap-2 text-xs">
          <span className="opacity-50">©</span>
          <span className="font-semibold">
            {ProjectDetails.global.name}
            </span>
          <span>
            {(new Date().getFullYear())}
          </span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-4">
          <Link className="text-xs opacity-60 hover:opacity-100 transition" to="#">
            {ProjectDetails.global.name} Terms
          </Link>
          <Link className="text-xs opacity-60 hover:opacity-100 transition" to="#">
            Privacy Policy
          </Link>
          <Link className="text-xs opacity-60 hover:opacity-100 transition" to="#">
            Cookies Policy
          </Link>
          <Link className="text-xs opacity-60 hover:opacity-100 transition" to="#">
            Report a problem
          </Link>
        </nav>
      </div>
    </footer>
  )
}

