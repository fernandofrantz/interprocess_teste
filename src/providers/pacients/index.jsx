import { createContext, useContext } from "react";

const PacietContext = createContext();

export const PacientProvider = ({ children }) => {
  // Pegar pacientes do localStorage
  let pacient = [];
  const getLocalStoragedPacients = () => {
    if (pacient.length <= 0) {
      const keys = Object.keys(localStorage);
      for (let counter = 0; counter < keys.length; counter++) {
        let commingPacient = localStorage.getItem(keys[counter]);
        pacient.push(JSON.parse(commingPacient));
      }
    }
  };

  // Registrar paciente
  const registerPatientLocal = (pacientData) => {
    if (localStorage.getItem(pacientData.cpf) === null) {
      localStorage.setItem(pacientData.cpf, JSON.stringify(pacientData));
      pacient.push(pacientData);
      alert("Paciente cadastrado/editado com sucesso!");
    } else {
      alert("Este CPF já foi cadastrado");
    }
  };

  // Editar paciente
  const handleEditPacient = (editPacientData, cpf) => {
    let pacientToBeEdited = JSON.parse(localStorage.getItem(cpf));

    let afterEditUser = {
      address: editPacientData.address,
      birthday: editPacientData.birthday,
      cpf: pacientToBeEdited.cpf,
      createdOn: pacientToBeEdited.createdOn,
      name: editPacientData.name,
      sex: editPacientData.sex,
      status: editPacientData.status,
    };

    localStorage.removeItem(cpf);
    window.location.reload();
    registerPatientLocal(afterEditUser);
  };

  return (
    <PacietContext.Provider
      value={{
        pacient,
        registerPatientLocal,
        getLocalStoragedPacients,
        handleEditPacient,
      }}
    >
      {children}
    </PacietContext.Provider>
  );
};

export const usePacient = () => useContext(PacietContext);
