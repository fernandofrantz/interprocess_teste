import { StyledCardDiv } from "./styles";
import { AiOutlineEdit } from "react-icons/ai";

export const PatientCard = ({ person, setPacientAndOpenModal }) => {
  return (
    <>
      {person && person.status === "Ativo" ? (
        <StyledCardDiv style={{ backgroundColor: "#a8d890" }}>
          <div>
            <div className="cardHeader">
              <h3>{person.name}</h3>
              <AiOutlineEdit
                onClick={() => setPacientAndOpenModal(person)}
                className="edit"
              />
              <p onClick={() => setPacientAndOpenModal(person)}>editar</p>
            </div>
            <p>CPF: {person.cpf}</p>
            <p>Sexo: {person.sex}</p>
            <p>Status: {person.status}</p>
            <p>Data de nascimento: {person.birthday}</p>
            {person.address !== "" && <p>Endereço: {person.address}</p>}
          </div>
        </StyledCardDiv>
      ) : (
        <StyledCardDiv style={{ backgroundColor: "#dca3a3" }}>
          <div>
            <div className="cardHeader">
              <h3>{person.name}</h3>
              <AiOutlineEdit
                onClick={() => setPacientAndOpenModal(person)}
                className="edit"
              />
              <p onClick={() => setPacientAndOpenModal(person)}>editar</p>
            </div>
            <p>CPF: {person.cpf}</p>
            <p>Sexo: {person.sex}</p>
            <p>Status: {person.status}</p>
            <p>Data de nascimento: {person.birthday}</p>
            {person.address !== "" && <p>Endereço: {person.address}</p>}
          </div>
        </StyledCardDiv>
      )}
    </>
  );
};
