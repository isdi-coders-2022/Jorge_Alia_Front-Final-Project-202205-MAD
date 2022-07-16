import './footer.css';

export function Footer() {
    const template = (
        <>
            <footer>
                <img
                    className="footer__logo"
                    src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/footer%2Flogofooter.png?alt=media&token=2d1fbe82-3f5d-4caf-88d8-ab8518c01751"
                    alt="Logo Aguado pilates"
                />
                <a
                    href="https://www.instagram.com/aguado.pilates/?hl=es"
                    className="warapperInstagram"
                >
                    <p className="instagram">- Síguenos en Instagram -</p>
                </a>

                <div className="copyright">
                    <p className="copyright__ap">© AGUADO PILATES | 2022</p>
                    <p className="copyright__ap">
                        Web Development by JORGE ALIA
                    </p>
                    <p className="copyright__cookies">
                        Aviso legal | Política Privacidad | Política de cookies
                    </p>
                </div>
            </footer>
        </>
    );

    return template;
}
