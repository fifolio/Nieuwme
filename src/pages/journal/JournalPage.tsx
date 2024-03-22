import { Journal, JournalMob } from "@/components";


export default function JournalPage() {
  return (
    <>
      <div className="container-full">
        {/* For Large screens */}
        <div className="hidden lg:block md:block m-0 p-0 border-none">
          <Journal />
        </div>

        {/* For Tablets & Mobiles */}
        <div className="lg:hidden md:hidden m-0 p-0 border-none">
          <JournalMob />
        </div>
      </div>
    </>
  )
}
