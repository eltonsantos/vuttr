import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';

const Header = ({ toggleTheme }) => {

  const { colors, title } = useContext(ThemeContext);

  return (
    <div >
      <div>
        <h1 className="text-4xl text-green-600">VUTTR</h1>
        <span>Very Useful Tools to Remember</span>
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default Header;