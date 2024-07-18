"use client";

import  { MyUsercontextProvider, MyUserContextProvider } from "@/hooks/useUser";
import { Children } from "react";

interface UserProviderProps {
    children: React.ReactNode;
};

const UserProvider: React:FC<UserProviderProps> = ({
    Children 
}) => {
    return (
        <MyUsercontextProvider>
            {Children}
        </MyUsercontextProvider>
    )
};

export default UserProvider;
