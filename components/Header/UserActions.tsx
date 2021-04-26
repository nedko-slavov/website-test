import { FC, useContext, useCallback } from 'react';
import { UserContext } from '../../providers/UserProvider';
import UserLinks from './UserLinks';
import SignupLinks from './SignupLinks';
import { useTheme } from '../../providers/ThemeProvider';
import { CurrentTheme } from '../../types';
import setThemeClassOnBody from '../../helpers/setThemeClassOnBody';

const UserActions: FC = () => {
  const {
    selectedUserContext: { name, id },
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
      <label className="switch themes-switch">
        <input type="checkbox" onClick={setTheme} />
        <span className="slider" />
      </label>

      {name && name}
      {!id ? <SignupLinks /> : null}
      {id ? <UserLinks userId={id} /> : null}
    </div>
  );
};

export default UserActions;
