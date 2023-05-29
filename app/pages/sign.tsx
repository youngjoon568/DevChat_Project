import SignLayout from "@/components/templates/SignLayout/SignLayout";
import useIsLogin from "@/hooks/useIsLogin";

const Sign: React.FC = () => {
  useIsLogin({ login: "/" });

  return <SignLayout />;
};

export default Sign;