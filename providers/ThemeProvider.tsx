import { FC, createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CurrentTheme } from '../types';

const initialTheme: CurrentTheme = { current: 'dark' };

type ThemeContext = {
  theme: CurrentTheme;
  setCurrentTheme: (state: CurrentTheme) => void;
};

export const ThemeContext = createContext({
  theme: { current: 'dark' },
} as ThemeContext);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setCurrentTheme] = useState<CurrentTheme>(initialTheme);

  useEffect(() => {
    const bodyClassList = document.querySelector('body')?.classList as DOMTokenList;
    if (bodyClassList.length === 0) {
      bodyClassList.add(`theme-${initialTheme.current}`);
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setCurrentTheme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContext => useContext(ThemeContext);

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
