import { useState } from "react";
import { api } from "../services/Api";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/auth/login", inputs);
            navigate("/")
        } catch (err) {
            setErr(err.response.data)
        };
    };

    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input type="text" name="username" placeholder="Usuário" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Senha" onChange={handleChange} required />
                <button onClick={handleSubmit}>Login</button>
                {err && <p>{err}</p>}
                <span>Ainda não possui uma conta?
                    <Link to="/register">Registre-se</Link>
                </span>
            </form>
        </div>
    );
};
