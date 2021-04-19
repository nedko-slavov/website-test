import { ComponentPropsWithoutRef, Ref, forwardRef, ReactNode } from 'react';
import PropTypes from 'prop-types';

type ButtonKind = 'primary' | 'secondary' | 'secondary' | 'warning';
type ButtonType = 'submit' | 'button' | 'reset';

type ButtonProps = {
  type: ButtonType;
  kind?: ButtonKind;
  children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

const Button = forwardRef(function Button(
  { children, type, className, kind = 'primary', ...props }: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <button
      type={type}
      className={`btn-${kind} ${className ? className : ''}`}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.propTypes = {
  type: PropTypes.any.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  kind: PropTypes.oneOf<ButtonKind>(['primary', 'secondary', 'secondary', 'warning']),
};

export default Button;
