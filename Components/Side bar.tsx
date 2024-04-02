"use cliemt";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icon/hi"
import { BiSearch } from "react-icon/bi";

import Box from "./Box";

interface SidebarProps {
    children: React.ReactNode;
}

 const Sidebar: React.FC<SidebarProps> =({
    children
 }) => {
    const Pathname = usePathname();

    const routes = useMemo (() =>[
        {
            icon:HiHome,
            label:'Home',
            active: Pathname !== '/search',
            href:'/',
        },
        {
            label: 'search',
            active: Pathname === '/search',
            href:'/search',
        }

    ], [Pathname]); 
    
    return (
        <div className="flex h-full">
            <div
            className="
            hidden
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2
        "
    >
        <Box>
            <div
            className="
            flex
            flex-col
            gap-y-4
            px-4
            "
        >
            {routes.map((item) => (
                <sidebarItem    'SideBarItem' 
            ))}
            <div>

            </div>
            <Box>
                SideBar Naviagation 
                </Box>
                <Box> className="overflow-y-auto h-full">
                    Song Library
                    </Box>
                <div>
                    ClassName="
                    flex
                    flex-col
                    gap-y-4
                    px-4
                    "
                >
                    {routes.map((items) => (

                    )
                    )

                    }
                </div>      
            </Box>
            <Box ClassName="overflow-y-auto h-full">
                Song Library 
            </Box>
            </div>
        </div>
    );
 }

 export default Sidebar;