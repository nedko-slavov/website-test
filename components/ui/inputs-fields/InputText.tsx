import { FC } from 'react';
import PropTypes from 'prop-types';
import { InputProps } from '../../../types';
import { useTheme } from '../../../providers/ThemeProvider';

const InputText: FC<InputProps> = ({ label, name, register, required, type, errors = {} }) => {
  const {
    theme: { current },
  } = useTheme();

  return (
    <div className={`form-group theme-${current}`}>
      {label && <label className="control-label">{label}</label>}
      <input type={type} {...register(name, { required })} />

      {errors[name] ? <div className="has-error">{errors[name]?.message}</div> : null}
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.any.isRequired,
  label: PropTypes.any.isRequired,
  register: PropTypes.any.isRequired,
  required: PropTypes.bool.isRequired,
  errors: PropTypes.any,
};

export default InputText;
