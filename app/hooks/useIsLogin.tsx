import { useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

interface UseIsLoginProps {
    login?: string;
    logout?: string;
}

const useIsLogin = ({ login, logout }: UseIsLoginProps): void => {
    const { auth } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (auth.isLogin && login) {
            router.replace(login);
        } else if (!auth.isLogin && logout) {
            router.replace(logout);
        };
    }, [auth.isLogin, login, logout, router]);
};

export default useIsLogin;