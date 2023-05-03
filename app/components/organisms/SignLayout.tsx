import styled from "styled-components";
import Button from "../atoms/Button/Button";
import Text from "../atoms/Text/Text";
import LinkBtn from "../atoms/LinkBtn/LinkBtn";

const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
`;

const TextBox = styled.div`
width: 100%;
padding: 0 25px;
flex: 1.3;
position: relative;

p:first-child {
    margin-bottom: 2px;
}
`;

const TextInner = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%);
`;

const BtnContainer = styled.div`
width: 100%;
padding: 0 25px;
flex: 1;

`;

const BtnBox = styled.div`
width: 100%;

button {
    margin-bottom: 20px;
}

button:last-child {
    margin-bottom: 0;
}

button svg {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: translate(-50%, -50%);
}
`;

const LinkBtnBox = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;

a {
    margin-top: 10px;
}
`;

const SignLayout: React.FC = () => {
    return (
        <Container>
            <TextBox>
                <TextInner>
                    <Text textSize={"xxxl"}>DevChat</Text>
                    <Text textSize={"l"}>개발자들의 채팅 앱</Text>
                </TextInner>
            </TextBox>
            <BtnContainer>
                <BtnBox>
                    <Button bgSize={"l"} textSize={"m"} icon={"google"}>구글로 시작하기</Button>
                    <Button bgSize={"l"} textSize={"m"} noneBorder={true} icon={"github"} bgColor={"#121212"} textColor={"#fff"}>깃허브로 시작하기</Button>
                    <Button bgSize={"l"} textSize={"m"}>계정 만들기</Button>
                </BtnBox>
                <LinkBtnBox>
                    <LinkBtn bgSize={"s"} textSize={"m"} noneBorder={true} href={"/signin"}>로그인 페이지</LinkBtn>
                    <LinkBtn bgSize={"s"} textSize={"m"} noneBorder={true} href={"/signup"}>회원가입 패이지</LinkBtn>
                </LinkBtnBox>
            </BtnContainer>
        </Container>
    );
};

export default SignLayout;