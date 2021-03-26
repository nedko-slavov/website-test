import PropTypes from 'prop-types';

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  id?: string;
  label?: string;
}

const InputText: React.FC<InputProps> = ({ value, onChange, type = 'text', label, id }) => (
  <div className="form-group">
    {label && (
      <label className="control-label" htmlFor={id && id}>
        {label}
      </label>
    )}
    <input type={type} value={value} onChange={onChange} id={id && id} />
  </div>
);

InputText.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};

export default InputText;
