import { FC } from 'react';
import PropTypes from 'prop-types';
import { SelectProps, SelectOption } from '../../types';

const SelectInput: FC<SelectProps> = ({
  label,
  name,
  register,
  required,
  options,
  errors = {},
}) => (
  <div className="form-group">
    {label && <label className="control-label">{label}</label>}

    <select {...register(name, { required })}>
      {options.map((option: SelectOption) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    {errors[name] ? <div className="has-error">{errors[name]?.message}</div> : null}
  </div>
);

SelectInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.any.isRequired,
  label: PropTypes.string,
  options: PropTypes.any.isRequired,
  register: PropTypes.any.isRequired,
  required: PropTypes.bool.isRequired,
  errors: PropTypes.any,
};

export default SelectInput;
