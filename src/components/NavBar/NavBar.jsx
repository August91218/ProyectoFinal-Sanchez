import CartWidget from "./CartWidget/CartWidget"
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import './Navbar.css'

function NavBar() {
    return (
        <nav className="p-2 bg-danger">
            <ul className="nav d-flex justify-content-evenly align-items-center bg-danger">
                <li className="nav-item">
                    <img src={logo} alt="Logo Gamers" width="64px" height="64px" />
                </li>
                <li className="nav-item ">
                    <Link className="nav-link text-light active" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-light" to="/products">Productos</Link>
                </li>
                <li className="nav-item dropdown">
                    Categorias &#8628;
                    <ul>
                        <li className="dropdown-content vid">
                            <Link className="nav-link text-light" to="/category/video">Video</Link>
                        </li>
                        <li className="dropdown-content gab">
                            <Link className="nav-link text-light" to="/category/gabinete">Gabinete</Link>
                        </li>
                        <li className="dropdown-content proc">
                            <Link className="nav-link text-light" to="/category/procesador">Procesador</Link>
                        </li>
                        <li className="dropdown-content mem">
                            <Link className="nav-link text-light" to="/category/memoria">Memoria</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item d-flex align-center text-light">
                    <CartWidget />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar