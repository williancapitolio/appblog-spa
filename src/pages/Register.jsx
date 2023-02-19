import { useState } from "react";
import { api } from "../services/Api";
import { Link } from "react-router-dom";

export const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/register", inputs);
            console.log(res);
        } catch (err) {
            setErr(err.response.data)
        };
    };

    return (
        <div className="auth">
            <h1>Registrar</h1>
            <form>
                <input type="text" name="username" placeholder="Usuário" onChange={handleChange} required />
                <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Senha" onChange={handleChange} required />
                <button onClick={handleSubmit}>Registrar</button>
                {err && <p>{err}</p>}
                <span>Já possui uma conta registrada?
                    <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};
