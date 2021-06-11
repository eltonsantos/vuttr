import styled from "styled-components";

export const Search = styled.input`
  color: ${(props) => props.theme.colors.logo};
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.borderSearch};
`;

export const Button = styled.button`
  color: ${(props) => props.theme.colors.txtBtnAdd};
  background: ${(props) => props.theme.colors.btnAdd};
  border: 1px solid ${(props) => props.theme.colors.border};

  :hover {
    background: ${(props) => props.theme.colors.btnAddHover};
  }
`;

export const Modal = styled.div`
  background: ${(props) => props.theme.colors.bgModal};

  svg {
    color: ${(props) => props.theme.colors.closeModal};
  }

  p {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const FormModal = styled.form`
  div {
    label {
      color: ${(props) => props.theme.colors.text};
    }
    input {
      color: ${(props) => props.theme.colors.txtInputModal};
      border: 1px solid ${(props) => props.theme.colors.borderModal};
      background: ${(props) => props.theme.colors.bgInputModal};
    }

    textarea {
      color: ${(props) => props.theme.colors.txtInputModal};
      border: 1px solid ${(props) => props.theme.colors.borderModal};
      background: ${(props) => props.theme.colors.bgInputModal};
    }
  }
`;
