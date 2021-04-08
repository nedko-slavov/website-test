import PropTypes from 'prop-types';

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
  id?: string;
  label?: string;
  name?: string;
}

const InputText: React.FC<InputProps> = ({ value, onChange, type = 'text', label, id, name }) => (
  <div className="form-group">
    {label && (
      <label className="control-label" htmlFor={id && id}>
        {label}
      </label>
    )}
    <input type={type} name={name} value={value} onChange={onChange} id={id && id} />
  </div>
);

InputText.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default InputText;
