import { Route, Routes } from "react-router-dom"
import Login from "../pages/login"
import Home from "../pages/home"
import Dashboard from "../pages/dashboard"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard title="Dashboard" />} />
        </Routes>
    )
}

export default AppRoutes