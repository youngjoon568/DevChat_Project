import { Session } from "next-auth";
import { ReactNode, createContext, useReducer } from "react";

export interface Auth {
    isLogin: boolean;
}

type Action =
    | { type: "LOGIN"; payload: Session }
    | { type: "LOGOUT" }
    | { type: "ISLOGIN"; payload: boolean };

const authReducer = (state: Auth, action: Action): Auth => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isLogin: true, };
        case "LOGOUT":
            return { ...state, isLogin: false, };
        case "ISLOGIN":
            return { ...state, isLogin: action.payload };
        default:
            return state;
    };
};

export interface AuthContextType {
    auth: Auth;
    dispatch: React.Dispatch<Action>;
}

export const AuthContext = createContext<AuthContextType>({
    auth: { isLogin: false, },
    dispatch: () => { },
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, dispatch] = useReducer(authReducer, {
        isLogin: false,
    });

    return (
        <AuthContext.Provider value={{ auth, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};