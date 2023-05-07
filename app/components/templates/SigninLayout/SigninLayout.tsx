import React from 'react';
import { SigninLayoutWrapper } from './styles';
import PublicHeader from '@/components/organisms/headers/Public/PublicHeader';

const SigninLayout: React.FC = () => {
    return (
        <SigninLayoutWrapper>
            <PublicHeader>로그인</PublicHeader>
        </SigninLayoutWrapper>
    );
};

export default SigninLayout;