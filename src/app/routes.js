import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/main";
import { Socialicons } from "../components/socialicons";

function AppRoutes() {
  return (
    <div className="s_c">
      <Routes>
        <Route path="*" element={<Main />} />
      </Routes>
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
