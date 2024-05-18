import React from 'react';
import SignUpFormProvider from '@components/signUpPage/SignUpProvider';
import Step2 from '@components/signUpPage/Step2';

function Step2Page() {
  return (
    <SignUpFormProvider>
      <Step2 />
    </SignUpFormProvider>
  );
}

export default Step2Page;
