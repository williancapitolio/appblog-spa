import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <div className="auth">
            <h1>Registrar</h1>
            <form>
                <input type="text" name="username" placeholder="Usuário" required />
                <input type="email" name="email" placeholder="E-mail" required />
                <input type="password" name="password" placeholder="Senha" required />
                <button>Registrar</button>
                <p>Isso é um erro!</p>
                <span>Já possui uma conta registrada?
                    <Link to="/login">Login</Link>
                </span>
            </form>
        </div>
    );
};
