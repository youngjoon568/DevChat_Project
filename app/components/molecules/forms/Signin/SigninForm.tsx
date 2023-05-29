import React, { useContext } from 'react';
import { CheckBoxWrapper, SaveBoxWrapper, InputBoxWrapper, InputContainerWrapper, InputItemWrapper, SigninFormWrapper, UtiliBoxWrapper, FindBoxWrapper } from './styles';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import Label from '@/components/atoms/Label/Label';
import { SigninProps } from '@/components/templates/SigninLayout/SigninLayout';
import { UserContext } from '@/context/UserContext';
import LinkBtn from '@/components/atoms/LinkBtn/LinkBtn';

const SigninForm: React.FC<SigninProps> = ({ handleSubmit }) => {    
    const { dispatch } = useContext(UserContext);

    return (
        <SigninFormWrapper onSubmit={handleSubmit}>
            <InputContainerWrapper>
                <InputBoxWrapper>
                    <Label labelText={"signin-email"} textSize={"l"}>이메일 *</Label>
                    <InputItemWrapper>
                        <Input onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })} inputText={"이메일을 입력해 주세요."} inputId={"signin-email"} textSize={"m"} textColor={"#888"} borderColor={"#888"} border={true} />
                    </InputItemWrapper>
                </InputBoxWrapper>
                <InputBoxWrapper>
                    <Label labelText={"signin-password"} textSize={"l"}>비밀번호 *</Label>
                    <InputItemWrapper>
                        <Input onChange={(e) => dispatch({ type: "PASSWORD", payload: e.target.value })} inputText={"비밀번호를 입력해 주세요."} inputId={"signin-password"} textSize={"m"} textColor={"#888"} borderColor={"#888"} border={true} />
                    </InputItemWrapper>
                </InputBoxWrapper>
            </InputContainerWrapper>
            <SaveBoxWrapper>
                <CheckBoxWrapper type={"checkbox"} id={"signin-checkSaveId"} />
                <Label textSize={"m"} labelText={"signin-checkSaveId"}>로그인 유지</Label>
            </SaveBoxWrapper>
            <Button bgSize={"xl"} textSize={"m"} bgColor={"#888"} textColor={"#fff"} border={true}>로그인</Button>
            <UtiliBoxWrapper>
                <LinkBtn href={"/signup"} box={true} bgSize={"s"} textSize={"m"} border={true}>회원가입</LinkBtn>
                <FindBoxWrapper>
                    <LinkBtn bgSize={"s"} border={true} textSize={"m"} href={"/find/id"}>아아디 찾기</LinkBtn>
                    <LinkBtn bgSize={"s"} border={true} textSize={"m"} href={"/find/password"}>비밀번호 찾기</LinkBtn>
                </FindBoxWrapper>
            </UtiliBoxWrapper>
        </SigninFormWrapper>
    );
};

export default SigninForm;