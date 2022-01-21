import styled from "styled-components";

export const ConsultPacientStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const SearchField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  width: 90%;
  height: 55px;

  .button {
    margin-top: 8px;
  }
`;

export const StyledMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pacients {
    display: flex;
    flex-wrap: wrap;

    width: 90%;

    .search {
      width: 100%;
    }
  }
`;

export const ModalEditDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
