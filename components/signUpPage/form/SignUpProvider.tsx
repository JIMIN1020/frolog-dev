'use client';

import React from 'react';
import styled from 'styled-components';
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
      <Form onSubmit={handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
}

export default SignUpFormProvider;

const Form = styled.div`
  width: 100%;
  height: fit-content;
  min-height: calc(var(--vh, 1vh) * 100 - 82px);

  display: flex;
  flex-direction: column;
`;
