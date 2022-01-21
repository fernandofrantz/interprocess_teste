import { createContext, useContext, useState, ReactNode } from "react";

const PacietContext = createContext();

export const PacientProvider = ({ children }) => {
  const [getLocalStorageData, setGetLocalStorageData] = useState([]);

  let pacient = [];

  const getLocalStoragedPacients = () => {
    if (pacient.length <= 0) {
      const keys = Object.keys(localStorage);
      let localStoragedPacients = [];
      for (let counter = 0; counter < keys.length; counter++) {
        let commingPacient = localStorage.getItem(keys[counter]);
        pacient.push(JSON.parse(commingPacient));
      }
    }
  };

  const registerPatientLocal = (pacientData) => {
    let haveAccess = false;
    if (localStorage.getItem(pacientData.cpf) === null) {
      localStorage.setItem(pacientData.cpf, JSON.stringify(pacientData));
      pacient.push(pacientData);
      alert("Paciente cadastrado com sucesso!");
    } else {
      alert("Este CPF já foi cadastrado");
    }
  };

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
    console.log(pacient);
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
