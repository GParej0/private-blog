import { Link, Outlet } from "react-router-dom";
import { token } from "../services/client";

export default function ProtectedRoute() {

    if (!token) {
        return <Link to="/login" replace />;
    }

    return <Outlet />;
}