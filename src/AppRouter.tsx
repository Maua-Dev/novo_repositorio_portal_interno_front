import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import UserActivities from "./pages/UserActivities";
import HoursChart from './pages/HoursChart';
import History from './pages/History';

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adicionar-atividade" element={<UserActivities />} />
            <Route path="/perfil" element={<UserProfile />} />
            <Route path="/historico" element={<History />} />
            <Route path="/horas-gerais" element={<HoursChart />} />
        </Routes>
    )
}
