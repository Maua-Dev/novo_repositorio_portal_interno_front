import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import UserActivities from "./pages/UserActivities";
import HoursChart from './pages/HoursChart';
import History from './pages/History';
import AdminChatbot from "./pages/AdminChatbot"
import MembersPage from './pages/Members';


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adicionar-atividade" element={<UserActivities />} />
            <Route path="/perfil" element={<UserProfile />} />
            <Route path="/historico" element={<History />} />
            <Route path="/horas-gerais" element={<HoursChart />} />
            <Route path="/chatbot" element={<AdminChatbot />} />
            <Route path="/members" element={<MembersPage />}></Route>
        </Routes>
    )
}
