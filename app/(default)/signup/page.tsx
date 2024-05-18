import React from 'react';
import SignUpFormProvider from '@components/signUpPage/SignUpProvider';
import Step1 from '@components/signUpPage/Step1';

function SignUpPage() {
  return (
    <SignUpFormProvider>
      <Step1 />
    </SignUpFormProvider>
  );
}

export default SignUpPage;
