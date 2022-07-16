import './contactPage.css';
export function ContactPage() {
    const template = (
        <>
            <main className="containerContactPage">
                <h2 className="title__contact">¿Hablamos?</h2>
                <img
                    className="imageContact"
                    src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/contacto%2Fcontacto.jpg?alt=media&token=ffa3c2b1-784b-47b0-b8a5-af2f24cde075"
                    alt="Imagen trabajando"
                />
                <div className="wrapperContact">
                    <p className="paragraph__contact">
                        Para cualquier duda que necesites resolver, sugerencia
                        que desees aportar, asesoramiento, propuestas, consejos
                        o cualquier otra cosa que se te pueda ocurrir estoy al
                        otro lado.
                    </p>
                    <div className="wrapperContact__info">
                        <div className="containerContactIcon">
                            <img
                                className="iconContact"
                                src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Finstagram.png?alt=media&token=7a84b08c-482c-4352-8331-b5855b9bdc17"
                                alt=""
                            />
                            <p>@aguado.pilates</p>
                        </div>
                        <div className="containerContactIcon">
                            <img
                                className="iconEmail"
                                src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Femail.png?alt=media&token=8a559e0f-593c-44a7-bac4-c20255007027"
                                alt=""
                            />
                            <p>info@aguadopilates.com</p>
                        </div>
                        <div className="containerContactIcon">
                            <img
                                className="iconWhatssap"
                                src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Fwa.png?alt=media&token=997fb9f7-d986-48cb-932c-9451cdf3a044"
                                alt=""
                            />
                            <p>676267421</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
    return template;
}

export default ContactPage;
