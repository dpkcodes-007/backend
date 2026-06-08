import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NormalArray from "../pages/NormalArray";
import HOAM from "../pages/Hoam";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/normal" element={<NormalArray />} />
      <Route path="/hoam" element={<HOAM />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;