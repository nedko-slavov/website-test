import { Ref, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps, ButtonKind } from '../../types';

const Button = forwardRef(
  (
    { label, type = 'button', className, kind = 'primary', ...props }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        type={type}
        className={`btn-${kind} ${className ? className : ''}`}
        {...props}
        ref={ref}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  type: PropTypes.any,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  kind: PropTypes.oneOf<ButtonKind>(['primary', 'secondary', 'secondary', 'warning']),
};

export default Button;
