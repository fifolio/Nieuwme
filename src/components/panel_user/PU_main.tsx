import { Link, useLocation } from "react-router-dom";
import {
    Main_style,
    ControlPanel_style,
    Profile_style,
    ToggleIcon_style,
    Paths_style,
    Dialog_style,
    ScrollArea_style,
    Labels_style,
    Footer_style,
} from "./styles";

// UI
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Types
import {
    ControlPanelItemsTypes,
    PU_paths,
    PU_labels,
    PU_footer
} from '@/types/PU_Types/PU_mainTypes.ts'

// Icons
import { LuChevronsUpDown } from "react-icons/lu";
import { CgFeed } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { ProjectDetails } from "@/stores/ui/ProjectDetails";
import { GiBlackBook } from "react-icons/gi";
import { PiNotebookLight } from "react-icons/pi";
import { MdBookmarkBorder } from "react-icons/md";


const controlPanelItems: ControlPanelItemsTypes[] = [
    {
        label: "Profile",
        path: "/profile",
        icon: <CgProfile />,
    },
    {
        label: "Settings",
        path: "/settings",
        icon: <SlSettings />,
    },
    {
        label: "logout",
        path: "/",
        icon: <IoMdLogOut />,
        style: 'text-red-500',
    }
];

const pu_paths: PU_paths[] = [
    {
        label: "Journals",
        path: "/journal",
        icon: <CgFeed size={20} />,
    },
];

const pu_labels: PU_labels[] = [
    {
        label: "a Notebook",
        path: "path",
        numOfContent: 12,
        icon: <MdBookmarkBorder size={20} />,
    },
]

const pu_footer: PU_footer[] = [
    {
        label: `${ProjectDetails.global.name} Terms`,
        path: "/terms",
    },
    {
        label: "privacy Policy",
        path: "/privacy",
    },
    {
        label: "cookies Policy",
        path: "/cookies",
    },
    {
        label: "report a problem",
        path: "/report",
    },
    {
        label: "github",
        path: "https://github.com/fifolio/Nieuwme",
    },
];


export default function PU_main() {

    // Check on the current page url
    const path = useLocation();


    return (
        <div className={Main_style}>

            {/* The Control panel menu */}
            <DropdownMenu>
                <DropdownMenuTrigger className={ControlPanel_style.container}>
                    <span className={Profile_style.section}>
                        <img src="https://placehold.co/200" alt="Profile"
                            className={Profile_style.avatar} />
                        <h6 className={Profile_style.username}>
                            amanda james
                        </h6>
                    </span>
                    <LuChevronsUpDown className={ToggleIcon_style} />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    {/* Map on the Control Panel Items */}
                    <DropdownMenuLabel className={ControlPanel_style.dropdownMenuLabel}>Control Panel</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {controlPanelItems.map((item, key) => (
                        <Link key={key} to={item.path}>
                            {item.label == 'logout' && (<DropdownMenuSeparator />)}
                            <DropdownMenuItem className="cursor-pointer">
                                <span className={item.label == 'logout' ? `${ControlPanel_style.links} ${ControlPanel_style.logout}` : `${ControlPanel_style.links}`}>
                                    {item.icon}
                                    {item.label}
                                </span>
                            </DropdownMenuItem>
                        </Link>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <Separator className="mt-1 mb-2" />

            {/* The Paths section */}
            <div className={Paths_style.container}>
                {pu_paths.map((item, key) => (
                    <Link key={key} to={`${item.path}`} className={`${Paths_style.links} ${path.pathname == item.path && Paths_style.active}}`}>
                        {item.icon}
                        {item.label}
                    </Link>
                ))}
                <Dialog>
                    <DialogTrigger className={`${Paths_style.links}`}>
                        <GiBlackBook size={20} />
                        Create new Notebook
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className={Dialog_style.DialogTitle}>Create New Notebook</DialogTitle>
                            <DialogDescription>
                                A notebook provides an organized space for your learning materials. Creating one allows you to add pages to document and track your progress efficiently. Each notebook offers a dedicated area to manage your content effectively. Ensure the title reflects its contents.
                            </DialogDescription>
                        </DialogHeader>
                        {/* Input section */}
                        <div className={Dialog_style.InputSection}>
                            <Input type="text" placeholder="Enter a unique notebook name" />
                            <Button type="submit">Create Notebook</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>


            <Separator className="mt-1 mb-2" />

            {/* The Labels section */}
            <ScrollArea className={ScrollArea_style}>
                {pu_labels.length > 0 ? (
                    <div className={Labels_style.container}>
                        {pu_labels.map((item, key) => (
                            <Link key={key} to={`${item.path}`} className={`${Labels_style.links}}`}>
                                {item.icon}
                                {item.label}
                                <span className={Labels_style.num}>{item.numOfContent}</span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className={Labels_style.empty}>
                        <p>
                            No notebook found
                        </p>
                        <PiNotebookLight size={80} />
                    </div>
                )}
            </ScrollArea>

            <Separator className="mb-2" />

            {/* Footer section */}
            <div className={Footer_style.container}>
                {pu_footer.map((item, key) => (
                    <Link key={key} to={`${item.path}`} target="_blank" className={`${Footer_style.links}`}>
                        {item.label}
                    </Link>
                ))}

                <div className={Footer_style.copyright}>
                    <span>©</span>
                    <span>
                        {(new Date().getFullYear())}
                    </span>
                    <span className="font-semibold">
                        {ProjectDetails.global.name}
                    </span>
                </div>
            </div>


        </div>
    )
}
