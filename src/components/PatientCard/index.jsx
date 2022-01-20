import { StyledCardDiv } from "./styles"

export const PatientCard = ({ person }) => {
    return (
        <>
        {person &&
            person.status === 'Ativo' ? (
            <StyledCardDiv style={{backgroundColor: '#a8d890'}}>
                <div >
                    <h3>{person.name}</h3>
                    <p>CPF: {person.cpf}</p>
                    <p>Sexo: {person.sex}</p>
                    <p>Status: {person.status}</p>
                    <p>Data de nascimento: {person.birthday}</p>
                </div>
            </StyledCardDiv>
            ) : (
            <StyledCardDiv style={{backgroundColor: '#dca3a3'}}>
            <div >
                <h3>{person.name}</h3>
                <p>CPF: {person.cpf}</p>
                <p>Sexo: {person.sex}</p>
                <p>Status: {person.status}</p>
                <p>Data de nascimento: {person.birthday}</p>
            </div>
            </StyledCardDiv>
            )

        }
        </>
    )
}