import { FC } from 'react';
import { useUserContext } from '../../providers/UserProvider';
import UserLinks from './UserLinks';
import SignupLinks from './SignupLinks';
import { useTheme } from '../../providers/ThemeProvider';
import { CurrentTheme } from '../../types';
import setThemeClassOnBody from '../../helpers/setThemeClassOnBody';
import ThemeSwitch from './ThemeSwitch';

const Toolbar: FC = () => {
  const {
    selectedUserContext: { id },
  } = useUserContext();

  const {
    theme: { current },
    setCurrentTheme,
  } = useTheme();

  const setTheme = (): void => {
    const currentTheme: CurrentTheme = { current: current === 'dark' ? 'light' : 'dark' };

    setThemeClassOnBody(currentTheme.current);
    setCurrentTheme(currentTheme);
  };

  return (
    <div className="user-info">
      {!id ? <SignupLinks /> : null}
      {id ? <UserLinks /> : null}

      <ThemeSwitch setTheme={setTheme} />
    </div>
  );
};

export default Toolbar;
