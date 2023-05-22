import React from 'react';
import { IconItemWrapper, InputBoxWrapper, InputContainerWrapper, InputItemWrapper, SignupFormWrapper } from './styles';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import Label from '@/components/atoms/Label/Label';
import Icon from '@/components/atoms/Icon/Icon';

const SignupForm: React.FC = () => {
    return (
        <SignupFormWrapper>
            <InputContainerWrapper>
                <InputBoxWrapper>
                    <Label labelText={"signup-email"} textSize={"l"}>이메일 *</Label>
                    <InputItemWrapper>
                        <Input inputText={"예) abc@gmail.com"} inputId={"signup-email"} textSize={"m"} textColor={"#ccc"} borderColor={"#888"} border={true} />
                        <IconItemWrapper>
                            <Icon icon={"close"} iconSize={"m"} textColor={"#888"} />
                        </IconItemWrapper>
                    </InputItemWrapper>
                </InputBoxWrapper>
                <InputBoxWrapper>
                    <Label labelText={"signup-password"} textSize={"l"}>비밀번호 *</Label>
                    <InputItemWrapper>
                        <Input inputText={"영문, 숫자 포함 6-16자"} inputId={"signup-password"} textSize={"m"} textColor={"#ccc"} borderColor={"#888"} border={true} />
                        <IconItemWrapper>
                            <Icon icon={"eye"} iconSize={"m"} textColor={"#888"} />
                            <Icon icon={"close"} iconSize={"m"} textColor={"#888"} />
                        </IconItemWrapper>
                    </InputItemWrapper>
                </InputBoxWrapper>
                <InputBoxWrapper>
                    <Label labelText={"signup-checkPassword"} textSize={"l"}>비밀번호 확인 *</Label>
                    <InputItemWrapper>
                        <Input inputText={"비밀번호를 한 번 더 입력해주세요."} inputId={"signup-checkPassword"} textSize={"m"} textColor={"#ccc"} borderColor={"#888"} border={true} />
                        <IconItemWrapper>
                            <Icon icon={"eye"} iconSize={"m"} textColor={"#888"} />
                            <Icon icon={"close"} iconSize={"m"} textColor={"#888"} />
                        </IconItemWrapper>
                    </InputItemWrapper>
                </InputBoxWrapper>
                <InputBoxWrapper>
                    <Label labelText={"signup-name"} textSize={"l"}>이름*</Label>
                    <InputItemWrapper>
                        <Input inputText={"예) 홍길동"} inputId={"signup-name"} textSize={"m"} textColor={"#ccc"} borderColor={"#888"} border={true} />
                        <IconItemWrapper>
                            <Icon icon={"close"} iconSize={"m"} textColor={"#888"} />
                        </IconItemWrapper>
                    </InputItemWrapper>
                </InputBoxWrapper>
            </InputContainerWrapper>
            <Button bgSize={"xl"} textSize={"m"} bgColor={"#888"} textColor={"#fff"} border={true}>다음</Button>
        </SignupFormWrapper>
    );
};

export default SignupForm;