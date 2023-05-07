import React from 'react';
import { SignupSectionWrapper } from './styles';
import SignupForm from '@/components/molecules/forms/Signup/SignupForm';

const SignupSection: React.FC = () => {
  return (
    <SignupSectionWrapper>
      <SignupForm />
    </SignupSectionWrapper>
  );
};

export default SignupSection;