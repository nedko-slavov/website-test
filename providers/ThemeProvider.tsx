import { FC, createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CurrentTheme, ThemeContextType } from '../types';

const initialTheme: CurrentTheme = { current: 'dark' };

export const ThemeContext = createContext<ThemeContextType>({
  theme: { current: 'dark' },
  setCurrentTheme: (state) => {
    console.log(state);
  },
});

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

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
