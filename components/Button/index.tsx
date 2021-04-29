import { Ref, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps, ButtonKind } from '../../types';

const Button = forwardRef(function Button(
  { children, type = 'button', className, kind = 'primary', ...props }: ButtonProps,
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
  type: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  kind: PropTypes.oneOf<ButtonKind>(['primary', 'secondary', 'secondary', 'warning']),
};

export default Button;
