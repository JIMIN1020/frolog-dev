import React from 'react';
import SignUpFormProvider from '@components/signUpPage/SignUpProvider';
import Step4 from '@components/signUpPage/Step4';

function Step4Page() {
  return (
    <SignUpFormProvider>
      <Step4 />
    </SignUpFormProvider>
  );
}

export default Step4Page;
