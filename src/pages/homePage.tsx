import { useSelector } from 'react-redux';
import { WorkoutListThree } from '../components/workout/listWorkoutsThree';
import { iState } from '../store/store';
import './homePage.css';

export function HomePage() {
    const workouts = useSelector((store: iState) => store.workouts);
    const template = (
        <>
            <main>
                <div className="wrapper__image">
                    <img className="image__mar" src="./img/mar.jpg" alt="" />
                    <img
                        className="image__ana"
                        src="./img/portada.jpg"
                        alt=""
                    />
                </div>
                <div className="wrapper__text">
                    <div className="wrapper__text1">
                        <p>Entrena, disfruta, vive.</p>
                        <h2>Diseña tu propio entrenamiento</h2>
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
                <WorkoutListThree workouts={workouts}></WorkoutListThree>
                <h3>Testimonios</h3>
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
