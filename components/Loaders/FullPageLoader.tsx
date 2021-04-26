import { FC } from 'react';
import { BaseLoader } from './BaseLoader';
import { useTheme } from '../../providers/ThemeProvider';

export const FullPageLoader: FC = () => {
  const {
    theme: { current },
  } = useTheme();

  return (
    <div className={`full-page-loader theme-${current}`}>
      <BaseLoader />
    </div>
  );
};
