import './footer.css';

export function Footer() {
    const template = (
        <>
            <footer>
                <img
                    className="footer__logo"
                    src="./img/logofooter.png"
                    alt="Logo Aguado pilates"
                />
                <div className="copyright">
                    <p>© AGUADO PILATES | 2022</p>
                    <p>Web Development by JORGE ALIA</p>
                </div>
            </footer>
        </>
    );

    return template;
}
