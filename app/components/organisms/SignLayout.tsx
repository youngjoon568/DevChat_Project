import styled from "styled-components";
import Button from "../atoms/Button/Button";
import Text from "../atoms/Text/Text";

const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
`;

const TextBox = styled.div`
width: 100%;
padding: 0 20px;
flex: 1.5;
position: relative;
`;

const TextInner = styled.div`
position: absolute;
top: 50%;
transform: translateY(-50%);
`;

const BtnBox = styled.div`
width: 100%;
padding: 0 20px;
flex: 1;

button {
    margin-bottom: 20px;
    font-size: 1.6rem;
}

button:last-child {
    margin-bottom: 0;
}
`;

const SignLayout = () => {
    return (
        <Container>
            <TextBox>
                <TextInner>
                    <Text size={"xl"}>DevChat</Text>
                    <Text size={"l"}>개발자들의 채팅 앱</Text>
                </TextInner>
            </TextBox>
            <BtnBox>
                <Button icon={"google"}>구글로 시작하기</Button>
                <Button icon={"kakao"}>카카오로 시작하기</Button>
                <Button icon={"github"}>깃허브로 시작하기</Button>
            </BtnBox>
        </Container>
    );
};

export default SignLayout;