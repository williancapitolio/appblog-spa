import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

export const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link className="link" to="/"><img src={Logo} alt="Logo" /></Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=art"><h6>Arte</h6></Link>
                    <Link className="link" to="/?cat=science"><h6>Ciência</h6></Link>
                    <Link className="link" to="/?cat=technology"><h6>Tecnologia</h6></Link>
                    <Link className="link" to="/?cat=cinema"><h6>Cinema</h6></Link>
                    <Link className="link" to="/?cat=design"><h6>Design</h6></Link>
                    <Link className="link" to="/?cat=food"><h6>Alimentação</h6></Link>
                    <span>{currentUser?.username}</span>
                    {currentUser ? <span onClick={logout}><Link className="link" to="/">Sair</Link></span> : <Link className="link" to="/login">Login</Link>}
                    {currentUser && <span className="write"><Link className="link" to="/write">Postar</Link></span>}
                </div>
            </div>
        </div>
    );
};
