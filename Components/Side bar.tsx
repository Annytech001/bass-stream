"use cliemt";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface SidebarProps {
    children: React.ReactNode;
}

 const Sidebar: React.FC<SidebarProps> =({
    children
 }) => {
    const Pathname = usePathname();

    const routes = useMemo (() =>[
        {
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
            <div>
            ClassName="
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