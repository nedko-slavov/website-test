import { FC, useContext, useCallback } from 'react';
import { UserContext } from '../../providers/UserProvider';
import UserLinks from './UserLinks';
import SignupLinks from './SignupLinks';
import { useTheme } from '../../providers/ThemeProvider';
import { CurrentTheme } from '../../types';
import setThemeClassOnBody from '../../helpers/setThemeClassOnBody';
import ThemeSwitch from './ThemeSwitch';

const UserActions: FC = () => {
  const {
    selectedUserContext: { id },
  } = useContext(UserContext);

  const {
    theme: { current },
    setCurrentTheme,
  } = useTheme();

  const setTheme = useCallback(() => {
    const currentTheme: CurrentTheme = { current: current === 'dark' ? 'light' : 'dark' };

    setThemeClassOnBody(currentTheme.current);
    setCurrentTheme(currentTheme);
  }, [current, setCurrentTheme]);

  return (
    <div className="user-info">
      {!id ? <SignupLinks /> : null}
      {id ? <UserLinks /> : null}

      <ThemeSwitch setTheme={setTheme} />
    </div>
  );
};

export default UserActions;
