import React from 'react';
import {
  UseFormReturn,
  SubmitHandler,
  SubmitErrorHandler,
  FieldValues,
} from 'react-hook-form';

interface FormProps {
  children: React.ReactNode;
  form: UseFormReturn<any>;
}

function Form({ children, form }: FormProps) {
  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form data submitted:', data);
  };

  const onError: SubmitErrorHandler<FieldValues> = (errors) => {
    console.error('Form errors:', errors);
  };

  return <form onSubmit={handleSubmit(onSubmit, onError)}>{children}</form>;
}

export default Form;
