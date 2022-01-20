import { createContext, useContext, useState, ReactNode } from "react";


const PacietContext = createContext();

export const PacientProvider = ({ children }) => {
    const [getLocalStorageData, setGetLocalStorageData] = useState([])

    let pacient = []

    const getLocalStoragedPacients = () => {

        if(pacient.length <= 0) {
            const keys = Object.keys(localStorage);
            let localStoragedPacients = []
            for (let counter = 0; counter < keys.length; counter++) {
                let commingPacient = localStorage.getItem(keys[counter])
                pacient.push(JSON.parse(commingPacient))
            }
        }
                
    }


    const registerPatientLocal = (pacientData) => {
        let haveAccess = false
        if (localStorage.getItem(pacientData.cpf) === null) {
            localStorage.setItem(pacientData.cpf, JSON.stringify(pacientData))
            pacient.push(pacientData)
            console.log('Paciente cadastrado com sucesso!')
        }
        else {
            console.warn('Este CPF já foi cadastrado');
        }
    }

    return (
        <PacietContext.Provider
        value={{pacient, registerPatientLocal, getLocalStoragedPacients}}
        >
            {children}
        </PacietContext.Provider>
    )
}

export const usePacient = () => useContext(PacietContext)