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
        color: ${(props) => props.theme.colors.btnRemove};

        :hover {
          color: ${(props) => props.theme.colors.btnRemoveHover};
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
          color: ${(props) => props.theme.colors.txtTag};

          :hover {
            color: ${(props) => props.theme.colors.txtTagHover};
          }
        }
      }
    }
  }
`;
