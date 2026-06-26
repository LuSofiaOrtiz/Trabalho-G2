import "./navbar.css";
import { useAuth } from "../../contexts/AuthContext";

export function Navbar() {
    const { logout } = useAuth();

    return (
        <header className="navbar">
            <div>SUPER MAPA</div>
            <button className="close" onClick={logout}>X</button>
        </header>
    );
}