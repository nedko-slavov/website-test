import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type ButtonKind = 'primary' | 'secondary' | 'secondary' | 'warning';
type ButtonType = 'submit' | 'button' | 'reset';

export type ButtonProps = {
  type: ButtonType;
  kind?: ButtonKind;
  children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;
