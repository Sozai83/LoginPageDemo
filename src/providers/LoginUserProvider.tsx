import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { user } from "../types/api/user";

type LoginUserContextType = {
    loginUser: user | null;
    setLoginUser: Dispatch<SetStateAction<user | null>>;
}

const LoginUserContext = createContext<LoginUserContextType>(
    {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {

    const { children } = props;
    const [loginUser, setLoginUser] = useState<user | null>(null);
    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </LoginUserContext.Provider>
    )
}

