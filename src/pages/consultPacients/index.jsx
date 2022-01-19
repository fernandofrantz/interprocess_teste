import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { PatientCard } from "../../components/PatientCard"
import { usePacient } from "../../providers/pacients"
import { ConsultPacientStyled, Header, SearchField, StyledMainDiv } from "./styles"

export const ConsultPacient = () => {
    
    const { pacient } = usePacient()

    const [userSearchForName, setUserSearchForName] = useState('')



    return (
        <>
        <StyledMainDiv>
            <SearchField>
                <TextField 
                    label="Procure pelo paciente"
                    margin="normal"
                    variant="outlined"
                    placeholder="Ex: Fernando"
                    size="small"
                    color="secondary"
                 />
                <Button className="button" color="secondary" type="submit" variant="contained">
                    enviar
                </Button>
            </SearchField>



        <ConsultPacientStyled>
            {pacient && pacient.map((person, index) => (
                <PatientCard key={index} person={person}/>
                ))}
        </ConsultPacientStyled>
        </StyledMainDiv>
        </>
    )
}