import React from 'react';
import { SigninLayoutWrapper } from './styles';
import PublicHeader from '@/components/organisms/headers/Public/PublicHeader';
import SigninSection from '@/components/organisms/sections/Signin/SigninSection';

export interface SigninProps extends React.HTMLAttributes<HTMLElement> {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const SigninLayout: React.FC<SigninProps> = ({ handleSubmit }) => {
    return (
        <SigninLayoutWrapper>
            <PublicHeader>로그인</PublicHeader>
            <SigninSection handleSubmit={handleSubmit} />
        </SigninLayoutWrapper>
    );
};

export default SigninLayout;