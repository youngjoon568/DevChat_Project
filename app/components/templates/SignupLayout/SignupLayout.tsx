import React from 'react';
import { SignupLayoutWrapper } from './styles';
import PublicHeader from '@/components/organisms/headers/Public/PublicHeader';
import SignupSection from '@/components/organisms/sections/Signup/SignupSection';

export interface SignupProps extends React.HTMLAttributes<HTMLElement> {
    handleSubmit?: any;
};

const SignupLayout: React.FC<SignupProps> = ({ handleSubmit }) => {

    return (
        <SignupLayoutWrapper>
            <PublicHeader>회원가입</PublicHeader>
            <SignupSection handleSubmit={handleSubmit} />
        </SignupLayoutWrapper>
    );
};

export default SignupLayout;