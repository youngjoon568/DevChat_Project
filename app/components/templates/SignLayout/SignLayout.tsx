import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import LinkBtn from "../../atoms/LinkBtn/LinkBtn";
import { theme } from "@/pages/_app";
import { BtnBox, BtnContainer, LinkBtnBox, SignLayoutWrapper, TextBox, TextInner } from "./styles";
import { signIn } from "next-auth/react";

const SignLayout: React.FC = () => {
    return (
        <SignLayoutWrapper>
            <TextBox>
                <TextInner>
                    <Text textSize={"xxxl"}>DevChat</Text>
                    <Text textSize={"l"}>개발자들의 채팅 앱</Text>
                </TextInner>
            </TextBox>
            <BtnContainer>
                <BtnBox>
                    <Button bgSize={"l"} textSize={"m"} icon={"google"} onClick={_ => signIn("google")}>구글로 시작하기</Button>
                    <Button bgSize={"l"} textSize={"m"} border={true} icon={"github"} bgColor={"#121212"} textColor={"#fff"} onClick={_ => signIn("github")}>깃허브로 시작하기</Button>
                    <LinkBtn bgSize={"xl"} textSize={"m"} border={true} href={"/signup"} bgColor={theme.color.primary} textColor={"#fff"}>계정 만들기</LinkBtn>
                </BtnBox>
                <LinkBtnBox>
                    <LinkBtn bgSize={"m"} textSize={"m"} textColor={theme.color.primary} box={true} border={true} href={"/signin"}>로그인</LinkBtn>
                </LinkBtnBox>
            </BtnContainer>
        </SignLayoutWrapper>
    );
};

export default SignLayout;