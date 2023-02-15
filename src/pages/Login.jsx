import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="auth">
            <h1>Login</h1>
            <form>
                <input type="text" name="username" placeholder="Usuário" required />
                <input type="password" name="password" placeholder="Senha" required />
                <button>Login</button>
                <p>Isso é um erro!</p>
                <span>Ainda não possui uma conta?
                    <Link to="/register">Registre-se</Link>
                </span>
            </form>
        </div>
    );
};
