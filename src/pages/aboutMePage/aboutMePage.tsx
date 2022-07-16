import './aboutMePage.css';
export function AboutMePage() {
    const template = (
        <>
            <main className="containerAboutMe">
                <div className="wrapperAbout">
                    <img
                        className="imageBowl"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/sobre%20m%C3%AD%2Ftaza.jpg?alt=media&token=e238248f-09bf-4dca-a979-8b3f0ed4465a"
                        alt="Imagen inspiración con taza"
                    />
                    <p className="paragraph__first">
                        Si quieres transformar la manera de comunicarte con tu
                        cuerpo y empezar a escucharlo de una forma más
                        consciente
                    </p>
                </div>
                <div className="wrapperAbout">
                    <p className="paragraph__second">
                        Si quieres transformar la manera de comunicarte con tu
                        cuerpo y empezar a escucharlo de una forma más
                        consciente. Si te gustaría fortalecer o tonificar la
                        musculatura de forma analítica, respetando los límites
                        de tu cuerpo. Si sufres dolores de espalda y te gustaría
                        equilibrar tu postura a través del pilates, este espacio
                        es para ti.
                    </p>
                    <img
                        className="imageWorking"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/sobre%20m%C3%AD%2Frojo.jpg?alt=media&token=8a3ec2d7-85ac-44fe-88ba-dc7fbe5d751f"
                        alt="Imagen Ana sonriendo trabajando"
                    />
                </div>
                <div className="wrapperAbout">
                    <img
                        className="imageStretching"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/sobre%20m%C3%AD%2Festirando.jpg?alt=media&token=f4d8b98d-23dc-4120-ac8e-91aaaefc1b4a"
                        alt="Imagen estirando"
                    />
                    <p className="paragraph__third">
                        Si quieres transformar la manera de comunicarte con tu
                        cuerpo y empezar a escucharlo de una forma más
                        consciente. Si te gustaría fortalecer o tonificar la
                        musculatura de forma analítica, respetando los límites
                        de tu cuerpo.{' '}
                    </p>
                </div>
                <div className="wrapperAbout">
                    <p className="paragraph__fourth">
                        ¡¡Para cualquier duda contacta conmigo!!
                    </p>

                    <img
                        className="imageHipos"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/sobre%20m%C3%AD%2Frojohipos.jpg?alt=media&token=96c16678-9be8-410a-94a8-b70281f0378a"
                        alt="Imagen hipopresivos"
                    />
                </div>
            </main>
        </>
    );
    return template;
}

export default AboutMePage;
