import { useState } from "react";
import { api } from "../services/Api";
import { Link } from "react-router-dom";

export const Register = () => {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/register", inputs);
            console.log(res);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Internal Server Error" });
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
                <p>Isso é um erro!</p>
                <span>Já possui uma conta registrada?
                    <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};
