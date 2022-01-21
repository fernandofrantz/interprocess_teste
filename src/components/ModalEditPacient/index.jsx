import { Button, MenuItem, TextField } from "@mui/material";
import { usePacient } from "../../providers/pacients";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { date } from "yup";
import { useNavigate } from "react-router-dom";

export const ModalEditPacient = ({ setIsOpenModal, pacientToEdit }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    birthday: yup.string().required("Data de nascimento obrigatória"),
    sex: yup.string().required("Indique o sexo"),
    address: yup.string(),
    status: yup.string().required("Indique um status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { handleEditPacient } = usePacient();

  const handleForm = (data) => {
    handleEditPacient(data, pacientToEdit.cpf);
  };

  return (
    <div>
      <h3>Editando: {pacientToEdit.name}</h3>
      <form className="form_register" onSubmit={handleSubmit(handleForm)}>
        <div>
          <TextField
            label="Nome"
            margin="normal"
            variant="outlined"
            placeholder="Ex. Fernando Frantz"
            size="small"
            color="primary"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            defaultValue={pacientToEdit.name}
          />
        </div>
        <div>
          <TextField
            label="Nascimento"
            margin="normal"
            placeholder="Ex. 20/03/02"
            variant="outlined"
            size="small"
            color="primary"
            {...register("birthday")}
            error={!!errors.birthday}
            helperText={errors.birthday?.message}
            defaultValue={pacientToEdit.birthday}
          />
        </div>
        <div>
          <TextField
            label="Endereço"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            {...register("address")}
            error={!!errors.address}
            helperText={errors.address?.message}
            defaultValue={pacientToEdit.address}
          />
        </div>
        <div>
          <TextField
            id="select"
            label="Status"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            style={{ width: "30%" }}
            {...register("status")}
            error={!!errors.status}
            helperText={errors.status?.message}
            defaultValue={pacientToEdit.status}
            select
          >
            <MenuItem defaultChecked value="Ativo">
              Ativo
            </MenuItem>
            <MenuItem value="Inativo">Inativo</MenuItem>
          </TextField>
          <TextField
            id="select"
            label="Sexo"
            margin="normal"
            variant="outlined"
            size="small"
            color="primary"
            style={{ width: "30%" }}
            {...register("sex")}
            error={!!errors.sex}
            helperText={errors.sex?.message}
            defaultValue={pacientToEdit.sex}
            select
          >
            <MenuItem defaultChecked value="Masculino">
              Masculino
            </MenuItem>
            <MenuItem value="Feminimo">Feminino</MenuItem>
            <MenuItem value="other">Outro</MenuItem>
          </TextField>
        </div>
        <Button color="primary" type="submit" variant="contained">
          editar
        </Button>
        <Button
          color="secondary"
          type="button"
          variant="contained"
          onClick={() => setIsOpenModal(false)}
        >
          voltar
        </Button>
      </form>
    </div>
  );
};
