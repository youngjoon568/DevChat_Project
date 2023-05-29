import React from 'react';
import { SigninSectionWrapper } from './styles';
import SigninForm from '@/components/molecules/forms/Signin/SigninForm';
import { SigninProps } from '@/components/templates/SigninLayout/SigninLayout';

const SigninSection: React.FC<SigninProps> = ({ handleSubmit }) => {
    return (
        <SigninSectionWrapper>
            <SigninForm handleSubmit={handleSubmit} />
        </SigninSectionWrapper>
    );
};

export default SigninSection;