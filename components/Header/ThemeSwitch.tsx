import { FC } from 'react';
import PropTypes from 'prop-types';
import { ThemeSwitchProps } from '../../types';

const ThemeSwitch: FC<ThemeSwitchProps> = ({ setTheme }) => (
  <label className="switch themes-switch">
    <input type="checkbox" onClick={setTheme} />
    <span className="slider" />
  </label>
);

ThemeSwitch.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

export default ThemeSwitch;
