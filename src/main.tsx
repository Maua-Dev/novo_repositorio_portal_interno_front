import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import UserActivities from "./pages/UserActivities";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/perfil" element={<UserProfile />} />
      <Route path="/atividades" element={<UserActivities />} />
    </Routes>
  </BrowserRouter>,
);
