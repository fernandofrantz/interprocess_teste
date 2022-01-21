import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, MenuItem } from "@mui/material";
import { date } from "yup";
import { usePacient } from "../../providers/pacients";
import { RegisterPage, StyledFormContainer } from "./styles";

export const RegisterPacient = () => {



    const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório"),
    birthday: yup
      .string().required('Data de nascimento obrigatória'),
    cpf: yup
      .string()
      .required("CPF obrigatório"),
    sex: yup.string().required("Indique o sexo"),
    address: yup.string(),
    status: yup.string().required("Indique um status"),
    createdOn: date().default(() => new Date()),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const { registerPatientLocal, getLocalStoragedPacients } = usePacient()
  getLocalStoragedPacients()

  const handleForm = (data) => {
    registerPatientLocal(data)
  };

  return (
    <>
      <RegisterPage>
        <StyledFormContainer>
        <h4>
          Cadastre um paciente abaixo
        </h4>
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
              />
          </div>
          <div>
            <TextField
              label="CPF"
              margin="normal"
              placeholder="Ex. 123.456.789-10"
              variant="outlined"
              size="small"
              color="primary"
              {...register("cpf")}
              error={!!errors.cpf}
              helperText={errors.cpf?.message}
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
              style={{width:'110px'}}
              {...register("status")}
              error={!!errors.status}
              helperText={errors.status?.message}
              select
              >
              <MenuItem defaultChecked value="Ativo">Ativo</MenuItem>
              <MenuItem value="Inativo">Inativo</MenuItem>
            </TextField>
          <TextField
              id="select"
              label="Sexo"
              margin="normal"
              variant="outlined"
              size="small"
              color="primary"
              style={{width:'110px'}}
              {...register("sex")}
              error={!!errors.sex}
              helperText={errors.sex?.message}
              select
              >
              <MenuItem defaultChecked value="Masculino">Masculino</MenuItem>
              <MenuItem value="Feminimo">Feminino</MenuItem>
              <MenuItem value="other">Outro</MenuItem>
            </TextField>
          </div>
            <Button color="primary" type="submit" variant="contained">
              Submit
            </Button>
          </form>
          </StyledFormContainer>
      </RegisterPage>
    </>
  );
};


