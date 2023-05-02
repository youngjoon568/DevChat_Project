import styled from "styled-components";
import Button from "../atoms/Button/Button";

const Container = styled.div`
height: 100%;
`;

const TextBox = styled.div`

`;

const BtnBox = styled.div`
padding: 0 20px;

button {
    margin-bottom: 20px;
}

button:last-child {
    margin-bottom: 0;
}
`;

const SignLayout = () => {
    return (
        <Container>
            <TextBox>
                
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