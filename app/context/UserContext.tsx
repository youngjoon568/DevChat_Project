import { ReactNode, createContext, useReducer } from "react";

export interface User {
    email: string;
    password: string;
    name: string;
    checkPassword: string;
    userId: string;
    isSave: boolean;
};

type Action =
    | { type: "EMAIL"; payload: string }
    | { type: "PASSWORD"; payload: string }
    | { type: "NAME"; payload: string }
    | { type: "CHECK_PASSWORD"; payload: string }
    | { type: "USERID"; payload: string }
    | { type: "ISSAVE"; payload: boolean };

const userReducer = (state: User, action: Action): User => {
    switch (action.type) {
        case "EMAIL":
            return { ...state, email: action.payload };
        case "PASSWORD":
            return { ...state, password: action.payload };
        case "CHECK_PASSWORD":
            return { ...state, checkPassword: action.payload };
        case "NAME":
            return { ...state, name: action.payload };
        case "ISSAVE":
            return { ...state, isSave: action.payload };
        default:
            return state;
    };
};

export interface UserContextType {
    user: User;
    dispatch: React.Dispatch<Action>;
};

export const UserContext = createContext<UserContextType>({ user: { email: "", password: "", name: "", checkPassword: "", userId: "", isSave: false }, dispatch: () => { } });

interface UserProviderProps {
    children: ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, dispatch] = useReducer(userReducer, {
        email: "",
        password: "",
        checkPassword: "",
        name: "",
        userId: "",
        isSave: false,
    });

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};