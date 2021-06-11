import styled from 'styled-components';
import { Moon } from '@styled-icons/boxicons-regular/Moon';
import { Sun } from '@styled-icons/boxicons-regular/Sun';

export const Logo = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.logo};
`;

export const Slogan = styled.span`
  font-family: 'Inter';
  color: ${props => props.theme.colors.slogan};

  @media (max-width: 570px) {
    font-size: 0.8rem;
  }
`;

export const MoonIcon = styled(Moon)`
  margin-top: -4px;
`;

export const SunIcon = styled(Sun)`
  margin-top: -4px;
`;