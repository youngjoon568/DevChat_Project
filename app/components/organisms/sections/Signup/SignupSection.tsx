import React from 'react';
import { SignupSectionWrapper } from './styles';
import SignupForm from '@/components/molecules/forms/Signup/SignupForm';
import { SignupProps } from '@/components/templates/SignupLayout/SignupLayout';

const SignupSection: React.FC<SignupProps> = ({ handleSubmit }) => {
    return (
        <SignupSectionWrapper>
            <SignupForm handleSubmit={handleSubmit} />
        </SignupSectionWrapper>
    );
};

export default SignupSection;