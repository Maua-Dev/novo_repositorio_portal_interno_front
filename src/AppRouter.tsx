import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import UserActivities from "./pages/UserActivities";

export default function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<UserProfile />} />
            <Route path="/atividades" element={<UserActivities />} />
        </Routes>
    )
}
