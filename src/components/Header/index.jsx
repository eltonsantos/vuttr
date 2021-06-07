import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

import { Logo, Slogan, MoonIcon, SunIcon } from './styles';

const Header = ({ toggleTheme }) => {

  const { colors, title } = useContext(ThemeContext);

  return (
    <div className="flex justify-between w-full mt-5 p-3">
      <div>
        <Logo className="text-7xl font-bold">VUTTR</Logo>
        <Slogan className="tracking-widest text-2xl ml-2">Very Useful Tools to Remember</Slogan>
      </div>
      <div className="flex justify-between my-3">
        <SunIcon className="text-yellow-300 w-7 h-7" />
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, colors.secundary)}
          onColor={colors.secundary}
        />
        <MoonIcon className="text-gray-600 w-7 h-7" />
      </div>
    </div>
  );
}

export default Header;