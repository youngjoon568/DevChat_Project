import React from 'react';
import { SignupFormWrapper } from './styles';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';

const SignupForm: React.FC = () => {
  return (
    <SignupFormWrapper>
        <Input inputText={"예) abc@gmail.com"} textSize={"m"} textColor={"#ccc"} bgSize={"l"} borderColor={"#aaa"} padSize={"l"}  />
        <Input inputText={"영문, 숫자 포함 6-16자"} textSize={"m"} textColor={"#ccc"} bgSize={"l"} borderColor={"#aaa"} padSize={"l"}  />
        <Input inputText={"비밀번호를 한 번 더 입력해주세요."} textSize={"m"} textColor={"#ccc"} bgSize={"l"} borderColor={"#aaa"} padSize={"l"}  />
        <Input inputText={"예) 홍길동"} textSize={"m"} textColor={"#ccc"} bgSize={"l"} borderColor={"#aaa"} padSize={"l"}  />

        <Button bgSize={"xl"} textSize={"m"} bgColor={"#888"} textColor={"#fff"} border={true}>다음</Button>
    </SignupFormWrapper>
  );
};

export default SignupForm;