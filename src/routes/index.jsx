import { Route, Routes } from "react-router";
import { ConsultPacient } from "../pages/consultPacients";
import { Home } from "../pages/home";
import { RegisterPacient } from "../pages/registerPacient";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registerPacient" element={<RegisterPacient />} />
      <Route path="/consultPacient" element={<ConsultPacient />} />
    </Routes>
  );
};
