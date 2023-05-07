import React from 'react';
import { SignupLayoutWrapper } from './styles';
import PublicHeader from '@/components/organisms/headers/Public/PublicHeader';
import SignupSection from '@/components/organisms/sections/Signup/SignupSection';

const SignupLayout: React.FC = () => {
  return (
    <SignupLayoutWrapper>
        <PublicHeader>회원가입</PublicHeader>
        <SignupSection />
    </SignupLayoutWrapper>
  );
};

export default SignupLayout;