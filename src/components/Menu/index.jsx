import { AppBar, MenuItem } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const sendTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
            <MenuItem onClick={() => sendTo("/registerPacient")}>
              Register
            </MenuItem>
            <MenuItem onClick={() => sendTo("/consultPacient")}>
              Pacients
            </MenuItem>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default Menu;
