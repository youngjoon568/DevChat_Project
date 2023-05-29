import SigninLayout from "@/components/templates/SigninLayout/SigninLayout";
import { AuthContext } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import useIsLogin from "@/hooks/useIsLogin";

const Signin: React.FC = () => {
    const { user } = useContext(UserContext);
    const { auth, dispatch } = useContext(AuthContext);

    useIsLogin({ login: "/", logout: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/signin", user);
            

            dispatch({ type: "ISLOGIN", payload: true });
            console.log(res.data.user);
        } catch (err) {
            console.log(err);
        };
    };

    return <SigninLayout handleSubmit={handleSubmit} />;
};

export default Signin;