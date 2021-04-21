import { FC, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import LoggedLinks from './LoggedLinks';
import LoggoutLinks from './LoggoutLinks';
import { useTheme } from '../../../providers/ThemeProvider';
import { Button } from '../../ui';
import { CurrentTheme } from '../../../types';

interface NavigationProps {
  userInfo: string;
}

const setThemeClassOnBody = (theme: string): void => {
  const bodyClassList = document.querySelector('body')?.classList as DOMTokenList;

  if (bodyClassList.contains('theme-dark')) {
    bodyClassList.remove('theme-dark');
    bodyClassList.add(`theme-${theme}`);
  }

  if (bodyClassList.contains('theme-light')) {
    bodyClassList.remove('theme-light');
    bodyClassList.add(`theme-${theme}`);
  }
};

const Navigation: FC<NavigationProps> = ({ userInfo }) => {
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
    <div className="navigation">
      <Link href="/albums">
        <a>Albums</a>
      </Link>

      <Link href="/photos">
        <a>Photos</a>
      </Link>

      {!userInfo ? <LoggoutLinks /> : null}
      {userInfo ? <LoggedLinks userInfo={userInfo} /> : null}
      <Button type="button" onClick={setTheme}>
        theme to {current === 'dark' ? 'light' : 'dark'}
      </Button>
    </div>
  );
};

Navigation.propTypes = {
  userInfo: PropTypes.string.isRequired,
};

export default Navigation;
