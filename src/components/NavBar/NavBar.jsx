import "./navbar.scss"
import CartWidget from "./CartWidget"
import logo from "../../assets/logo.jpg"

const NavBar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="imagenlogo" width={50}/>
            </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">BATERIAS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">PLATILLOS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">TAMBORES</a>
            </li>
            <li className="nav-item">
                <CartWidget/>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    )
}

export default NavBar