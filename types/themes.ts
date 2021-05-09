export type ThemeType = 'dark' | 'light';

export type CurrentTheme = { current: ThemeType };

export type ThemeContextType = {
  theme: CurrentTheme;
  setCurrentTheme: (state: CurrentTheme) => void;
};

export type ThemeSwitchProps = { setTheme: () => void };
