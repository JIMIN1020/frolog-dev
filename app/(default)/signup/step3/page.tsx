import React from 'react';
import SignUpFormProvider from '@components/signUpPage/SignUpProvider';
import Step3 from '@components/signUpPage/Step3';

function Step3Page() {
  return (
    <SignUpFormProvider>
      <Step3 />
    </SignUpFormProvider>
  );
}

export default Step3Page;
