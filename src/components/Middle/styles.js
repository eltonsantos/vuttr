import styled from 'styled-components';

export const Search = styled.input`
  color: ${props => props.theme.colors.logo};
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.borderSearch};
`;

export const Button = styled.button`
  color: ${props => props.theme.colors.textButtonAdd};
  background: ${props => props.theme.colors.buttonAdd};
  border: 1px solid ${props => props.theme.colors.border};

  :hover {
    background: ${props => props.theme.colors.buttonAddHover};
  }
`;