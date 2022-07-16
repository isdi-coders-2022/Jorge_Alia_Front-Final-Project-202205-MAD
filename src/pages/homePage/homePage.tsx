import { useSelector } from 'react-redux';
import { WorkoutListThree } from '../../components/workout/listWorkoutsThree/listWorkoutsThree';
import { iState } from '../../store/store';
import './homePage.css';

export function HomePage() {
    const workouts = useSelector((store: iState) => store.workouts);
    const template = (
        <>
            <main>
                <div className="wrapper__image">
                    <img
                        className="image__mar"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/portada%2Fmar.jpg?alt=media&token=a7c3043c-59a1-4782-b9e1-7b1cd767e52d"
                        alt="Imagen mar tranquilo"
                    />
                    <img
                        className="image__ana"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/portada%2Fportada.jpg?alt=media&token=6dc9e07f-6642-453d-9e46-94105aa20a91"
                        alt="Imagen estirando"
                    />
                </div>
                <div className="wrapper__text">
                    <div className="wrapper__text1">
                        <p>Entrena, disfruta, vive.</p>
                        <h2 className="wrapper__textTitle">
                            DISEÑA TU PROPIO ENTRENAMIENTO
                        </h2>
                    </div>
                    <p className="wrapper__text2">
                        Si quieres transformar la manera de comunicarte con tu
                        cuerpo y empezar a escucharlo de una forma más
                        consciente. Si te gustaría fortalecer o tonificar la
                        musculatura de forma analítica, respetando los límites
                        de tu cuerpo. Si sufres dolores de espalda y te gustaría
                        equilibrar tu postura a través del pilates, este espacio
                        es para ti.
                    </p>
                </div>
                <p className="titleSection">Workouts recientes</p>
                <WorkoutListThree workouts={workouts}></WorkoutListThree>
                <p className="titleSection">Testimonios</p>
                <section className="testimonials">
                    <p className="testimonials__item">
                        "BIENESTAR en toda la amplitud de la palabra"
                    </p>
                    <p className="testimonials__item">
                        “Después de cada clase salgo NUEVA, consigo desconectar
                        y me cambia la semana por completo"
                    </p>
                    <p className="testimonials__item">
                        "Agradecida, feliz, encantada, no imaginas lo mucho que
                        me inspiras"
                    </p>
                </section>
            </main>
        </>
    );

    return template;
}

export default HomePage;
