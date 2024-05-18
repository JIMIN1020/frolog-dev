'use client';

import React from 'react';
import SignUpFormProvider from '@components/signUpPage/SignUpProvider';
import SignupSuccess from '@components/signUpPage/SignUpSuccess';
import { useFormContext } from 'react-hook-form';
import { SignUpFormValues } from '@components/signUpPage/SignupFormSchema';

function SignupSuccessPage() {
  const { getValues } = useFormContext<SignUpFormValues>();
  const nickname = getValues('nickname');

  return <SignupSuccess nickname={nickname} />;
}

function SignupSuccessWrapper() {
  return (
    <SignUpFormProvider>
      <SignupSuccessPage />
    </SignUpFormProvider>
  );
}

export default SignupSuccessWrapper;
