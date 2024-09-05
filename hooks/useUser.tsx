import {User} from "@supabase/auth-helpers-nextjs"
import {
    useSessionContext,
    useUser as useSupaUser
} from "@supabase/auth-helpers-react"
import {createContext, useState} from "react"

import { Subcription, UserDetails } from "@/types"

type UserContextType = {
    accessToken: string | null;
    user:User | null;
    UserDetails: UserDetails | null;
    isLoading: boolean;
    subscription: Subcription | null; 
};

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export interface Props {
    [propName: string]: any;
};

export const MyUsercontextProvider = (props: Props) => {
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext();
    const user = useSupaUser();
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsloadingData] = useState(false);
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [subscription, setSubscription] = useState<Subcription |null> (null);

    const getUserDetails = () => supabase. from('users').select('*').single();
    const getSubscription =() => 
        supabase
    .from('subscription')
    .select('*, prices(*, product(*))')
    .in('status', ['trailing', 'active'])
    .single();

    useEffect(() => {
        if (user && !isLoadingData && !userDetails && !subscription) {
            setIsloadingData(true);

            Promise.allSettled([getUserDetails (), getSubscription()]).then(
                (results) => {
                    const userDetailsPromise = results[0];
                    const subscriptionPromise = results[1];

                    if (userDetailsPromise.status ==="fulfilled") {
                        setUserDetails(userDetailsPromise.value.data as UserDetails);
                    }

                    if (subscriptionPromise.status === "fulfilled") {
                        setSubscription(subscriptionPromise.value.data as Subcription);
                    }

                    setIsloadingData(false);
                } 
                );
            } else if (!user && !isLoadingUser && !isLoadingData) {
                setUserDetails(null);
                setSubscription(null);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [user, isLoadingData]);

        const value = {
            accessToken, 
            user,
            userDetails,
            isLoading: isLoadingUser || isLoadingData,
            subscription
        };

        return<UserContext.Provider value={value} {...props} />
    };

    export const useUser = () => {
        const context = (UserContext);
        if (context === undefined) {
            throw new Error ('useUser must be used within a MyUserContextProvider');
        }
        return context;     
    };
function useEffect(arg0: () => void, arg1: (boolean | User | null)[]) {
    throw new Error("Function not implemented.");
}

