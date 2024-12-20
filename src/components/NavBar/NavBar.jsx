import "./navbar.css";
import CartWidget from "./CartWidget";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    <img src={logo} alt="imagenlogo" width={50} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/category/baterias" className="nav-link active" aria-current="page">BATERIAS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/platillos" className="nav-link">PLATILLOS</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/tambores" className="nav-link">TAMBORES</Link>
                        </li>
                    </ul>
                    <div className="nav-item cart-button">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
