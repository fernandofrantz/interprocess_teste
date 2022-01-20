import { createContext, useContext, useState, ReactNode } from "react";


const PacietContext = createContext();

export const PacientProvider = ({ children }) => {
    const [pacient, setPacient] = useState([])

    const registerPatientLocal = (pacientData) => {
        const keys = Object.keys(localStorage);

        let haveAccess = false
        if (localStorage.getItem(pacientData.cpf) === null) {
            localStorage.setItem(pacientData.cpf, JSON.stringify(pacientData))
            setPacient([...pacient, pacientData])
            console.log('Paciente cadastrado com sucesso!')
        }
        else {
            console.warn('Este CPF já foi cadastrado');
        }
    }

    return (
        <PacietContext.Provider
        value={{pacient, registerPatientLocal}}
        >
            {children}
        </PacietContext.Provider>
    )
}

export const usePacient = () => useContext(PacietContext)