'use client';

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SignUpFormValues,
  defaultValues,
  signUpFormSchema,
} from './SignupFormSchema';

function SignUpFormProvider({ children }: { children: React.ReactNode }) {
  const formMethods = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: 'all',
  });

  const { handleSubmit } = formMethods;

  const onSubmit = (formValues: SignUpFormValues) => {
    console.log(formValues);
    alert(JSON.stringify(formValues));
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default SignUpFormProvider;
