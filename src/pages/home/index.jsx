import { Button } from "@mui/material"
import { usePacient } from "../../providers/pacients"
import { StyledHome } from "./styles"

import { useNavigate } from "react-router-dom";
import { DataSection } from "../../components/DataSection";


export const Home = () => {

    const { pacient, getLocalStoragedPacients } = usePacient()

    getLocalStoragedPacients()

    const navigate = useNavigate()
    const sendTo = (path) => {
        navigate(path)
    }

    
    // Pegar quantidade de pessoas cadastradas/ativas/inativas
    let totalPacients = pacient.length
    let activePacients = 0
    for (let counter = 0; counter < pacient.length; counter++) {
        if(pacient[counter].status === 'Ativo') {
            activePacients++
        }
    }
    const data = [
        { name: 'Ativos', value: activePacients },
        { name: 'Inativos', value: totalPacients-activePacients },
    ];
      
    return (
        <>
        <StyledHome>
            <div className="mainDiv">
                <div>
                    <h2>
                        Bem vindo(a) a ACME
                    </h2>
                    <DataSection totalPacients={totalPacients} activePacients={activePacients} data={data}/>
                </div>
                <div className="buttons">
                    <h4>
                        O que desejas fazer?
                    </h4>
                    <Button
                        onClick={() => sendTo('/registerPacient')}
                        style={{margin: '0px 0px 10px 0px'}}
                        variant="outlined"
                        color="secondary"
                    >Cadastrar novo paciente
                    </Button>
                     <Button
                        onClick={() => sendTo('/consultPacient')}
                        style={{margin: '15px 0px 0px 0px'}}
                        variant="outlined"
                        color="secondary"
                        >Consultar pacientes
                    </Button>
                </div>
            </div>
        </StyledHome>
        </>
    )
}