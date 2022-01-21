import { Button, Tooltip } from "@mui/material";
import { usePacient } from "../../providers/pacients";
import { StyledHome } from "./styles";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { pacient, getLocalStoragedPacients } = usePacient();

  getLocalStoragedPacients();

  let totalPacients = pacient.length;
  let activePacients = 0;
  for (let counter = 0; counter < pacient.length; counter++) {
    if (pacient[counter].status === "Ativo") {
      activePacients++;
    }
  }

  const navigate = useNavigate();
  const sendTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <StyledHome>
        <h2>Bem vindo(a) a ACME</h2>
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
        <h4>O que desejas fazer?</h4>
        <Button
          onClick={() => sendTo("/registerPacient")}
          style={{ margin: "0px 0px 10px 0px" }}
          variant="outlined"
          color="secondary"
        >
          Cadastrar novo paciente
        </Button>
        <Button
          onClick={() => sendTo("/consultPacient")}
          style={{ margin: "15px 0px 0px 0px" }}
          variant="outlined"
          color="secondary"
        >
          Consultar pacientes
        </Button>
      </StyledHome>
    </>
  );
};
