import { StyledCardDiv } from "./styles"

export const PatientCard = ({ person }) => {
    return (
        <>
        {person &&
        <StyledCardDiv>
            <h3>{person.name}</h3>
            <div>
                <p>CPF: {person.cpf}</p>
                <p>Sexo: {person.sex}</p>
                <p>Data de nascimento: {person.birthday}</p>
           </div>
        </StyledCardDiv>
        }
        </>
    )
}