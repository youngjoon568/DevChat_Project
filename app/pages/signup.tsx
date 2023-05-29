import SignupLayout from "@/components/templates/SignupLayout/SignupLayout";
import { UserContext } from "@/context/UserContext";
import useIsLogin from "@/hooks/useIsLogin";
import axios from "axios";
import { useContext } from "react";

const Signup: React.FC = () => {
    const { user } = useContext(UserContext);

    useIsLogin({ login: "/", logout: "" });
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/signup", user);

            console.log(res.data.message);
        } catch (err) {
            console.log(err);
        };
    };

    return <SignupLayout handleSubmit={handleSubmit} />;
};

export default Signup;