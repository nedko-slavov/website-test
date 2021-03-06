import { Path, UseFormRegister, DeepMap, FieldError } from 'react-hook-form';
import { FormEventHandler, ReactNode } from 'react';

export interface IFormValues {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  userId: string;
}

export type InputProps = {
  label?: string;
  name: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  type?: string;
  errors?: DeepMap<IFormValues, FieldError>;
};

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: SelectOption[];
} & InputProps;

export type FromProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  className?: string;
};

export type UserFormProps = {
  submitButonLabel: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<IFormValues>;
  errors?: DeepMap<IFormValues, FieldError>;
};
