import { Button, Menu, TextField } from "@mui/material"
import { useState } from "react"
import { PatientCard } from "../../components/PatientCard"
import { usePacient } from "../../providers/pacients"
import { ConsultPacientStyled, Header, SearchField, StyledMainDiv } from "./styles"

export const ConsultPacient = () => {
    
    const { pacient, getLocalStoragedPacients } = usePacient()


    const [sendSearchToNextState, setSendSearchToNextState] = useState('')
    const [userSearchForName, setUserSearchForName] = useState('')
    const [conditionalSendButton, setConditionalSendButton] = useState(true)

    const handleSearch = () => {
        setUserSearchForName(sendSearchToNextState)
        setConditionalSendButton(false)
    }

    const handleUnsearch = () => {
        setUserSearchForName('')
        setSendSearchToNextState('')
        setConditionalSendButton(true)
    }

    getLocalStoragedPacients()

    return (
        <>
        <StyledMainDiv>
        <SearchField>
            {conditionalSendButton ?
            (<>
                <TextField 
                label="Procure pelo paciente"
                margin="normal"
                variant="outlined"
                placeholder="Ex: Fernando"
                size="small"
                color="secondary"
                onChange={(evt) => setSendSearchToNextState(evt.target.value)}
                />
                <Button onClick={handleSearch} className="button" color="secondary" type="submit" variant="contained">
                    enviar
                </Button>
            </>
            ) : (
                <Button onClick={handleUnsearch} className="button" color="secondary" type="submit" variant="contained">
                    cancelar pesquisa
                </Button>
            )
            }
        </SearchField>

        {userSearchForName ?
            (<ConsultPacientStyled>
                <p>Resultados para: {userSearchForName}</p>
                {pacient && pacient.map((person, index) => {
                    if(person.name.toLowerCase() === userSearchForName.toLowerCase() 
                    || person.name.toLowerCase().split(' ')[0] === userSearchForName.toLowerCase()) {
                        return <PatientCard key={index} person={person}/>
                    }
                })}
            </ConsultPacientStyled>
            ) : (
            <ConsultPacientStyled>
                {pacient && pacient.map((person, index) => (
                    <PatientCard key={index} person={person}/>
                    ))}
            </ConsultPacientStyled>
            )
    }

        </StyledMainDiv>
        </>
    )
}