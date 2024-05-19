'use client';

import React from 'react';
import SignUpFormProvider from '@components/signUpPage/form/SignUpProvider';
import Step1 from '@components/signUpPage/step1/Step1';
import { useSearchParams } from 'next/navigation';
import Step2 from '@components/signUpPage/step2/Step2';
import Step3 from '@components/signUpPage/step3/Step3';
import Step4 from '@components/signUpPage/step4/Step4';
import SignupSuccess from '@components/signUpPage/SignUpSuccess';

function SignUpPage() {
  const step = parseInt(useSearchParams().get('step')!, 10);
  return (
    <SignUpFormProvider>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <SignupSuccess nickname='w' />}
    </SignUpFormProvider>
  );
}

export default SignUpPage;
