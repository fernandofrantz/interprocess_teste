import { PieChart, Pie } from 'recharts';


export const DataSection = ({ totalPacients, activePacients, data }) => {
    return (
        <>
        <div className='dataSection'>
            <div className="tableDiv">
                <h3>Cadastros</h3>
                    <ul className="tableHeader">
                        <li>Totais</li>
                        <li>Inativos</li>
                        <li>Ativos</li>
                    </ul>
                    <ul className="tableContent">
                        <li>{totalPacients}</li>
                        <li>{totalPacients - activePacients}</li>
                        <li>{activePacients}</li>
                    </ul>
            </div>
            <PieChart width={200} height={200}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                    />
                </PieChart>
            </div>
        </>
    )
}