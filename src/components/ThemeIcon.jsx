import React, { useContext } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ThemeContext from './ThemeContext';

const ThemeIcon = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle w-8">
      {theme === 'light' ? <NightsStayIcon /> : <WbSunnyIcon />}
    </div>
  );
};

export default ThemeIcon;
