import Logo from "../img/logo.png";

export const Footer = () => {
    return (
        <>
            <footer>
                <img src={Logo} alt="Logo" />
                <span>Feito com ♥ e <b>React.js</b>.</span>
            </footer>
        </>
    );
};
