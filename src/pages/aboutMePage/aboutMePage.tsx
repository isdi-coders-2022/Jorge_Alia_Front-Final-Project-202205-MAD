import './aboutMePage.css';
export function AboutMePage() {
    return (
        <>
            <main className="containerAboutMe">
                <h2 className="title__aboutMe">Hola, bienvenido</h2>
                <div className="wrapperAbout">
                    <img
                        className="imageBowl"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/sobre%20m%C3%AD%2Ftaza.jpg?alt=media&token=e238248f-09bf-4dca-a979-8b3f0ed4465a"
                        alt="Imagen inspiración con taza"
                    />
                    <p className="paragraph__first">
                        Soy Ana Aguado, tengo 25 años y vivo en Puente del
                        Arzobispo (Toledo).
                    </p>
                </div>
                <div className="wrapperAbout">
                    <p className="paragraph__second">
                        Mi inquietud por el crecimiento personal y mi afán por
                        conseguir mi mejor versión me han convertido en una loca
                        del cuidado de mi salud y la del resto de personas. Tras
                        licenciarme en Ciencia y Tecnología de los Alimentos,
                        decidí formarme como instructora de Pilates, una
                        formación que me aporto todo lo que necesitaba:
                        SEGURIDAD, CONFIANZA EN MI MISMA, AUTOESTIMA,
                        BIENESTAR... me hizo fuerte física y mentalmente.
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
                        Tras 2 años impartiendo clases cada día de la semana,
                        sin parar de crecer tanto personal como
                        profesionalmente, aprendiendo de mis alumnas y de las
                        muchas experiencias que Aguado Pilates me ha regalado,
                        me lanzo a crear esta plataforma en la que TU puedes
                        crear tu propia rutina de entrenamiento.{' '}
                    </p>
                </div>
                <div className="wrapperAbout">
                    <p className="paragraph__fourth">
                        Pongo en tus manos las herramientas que necesitas para
                        alcanzar tu mejor versión, para conseguir que conectes
                        con el placer de cuidarte.
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
}

export default AboutMePage;
