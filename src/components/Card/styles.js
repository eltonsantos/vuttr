import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.colors.logo};
  background: ${(props) => props.theme.colors.background};
  border-color: ${(props) => props.theme.colors.border};

  div {
    div {
      a {
        color: ${(props) => props.theme.colors.logo};
      }

      button {
        color: ${(props) => props.theme.colors.buttonRemove};

        :hover {
          color: ${(props) => props.theme.colors.buttonRemoveHover};
        }
      }
    }
  }

  h1 {
    color: ${(props) => props.theme.colors.text};
  }

  ul {
    li {
      div {
        a {
          color: ${(props) => props.theme.colors.textTag};

          :hover {
            color: ${(props) => props.theme.colors.textTagHover};
          }
        }
      }
    }
  }
`;
