import { usePacient } from "../../providers/pacients"

export const Home = () => {

    const { pacient } = usePacient()

    console.log(pacient)

    let totalPacients = pacient.length
    let activePacients = 0

    for (let counter = 0; counter < pacient.length; counter++) {
        if(pacient.status === 'Ativo') {
            activePacients++
        }
    }


    return (
        <>
            <div>
                <h2>
                   Bem vindo(a) a ACME
                </h2>
                <div>
                    <table>
                        <tr>
                            <td>Cadastros</td>
                            <td>Ativos</td>
                            <td>Inativos</td>
                        </tr>
                        <tr>
                            <td>{totalPacients}</td>
                            <td>{activePacients}</td>
                            <td>{totalPacients - activePacients}</td>
                        </tr>
                    </table>
                </div>
                <h4>
                    O que desejas fazer?
                </h4>
            </div>
        </>
    )
}