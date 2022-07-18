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
                    <video autoPlay loop muted width="100%" height="auto">
                        <source src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/home%2Fvideo.mp4?alt=media&token=480a6828-57dd-4ff2-bddb-e78209a788b1" />
                    </video>
                </div>
                <p className="paragraph__train">
                    <i> Entrena & Conecta</i> con el placer de cuidarte.
                </p>
                <div className="wrapper__image">
                    <img
                        className="image__frame"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/home%2Fcuadro.png?alt=media&token=47182ecb-96ee-426a-8a65-ecd6917b3cca"
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
                        <h2 className="wrapper__textTitle">
                            Diseña tu propio entrenamiento
                        </h2>
                    </div>
                    <p className="wrapper__text2">
                        Te ofrecemos las herramientas que necesitas para crear
                        el entrenamiento con el que siempre habias soñado, aquel
                        que se adapta a tu objetivo, cualidades, prioridades y
                        preferencias. Gracias a esta web conseguiras que tu
                        entrenamiento se convierta en tu rutina de autocuidado.
                        Conviertete en tu propio instructor. ¿Entrenamos?
                    </p>
                </div>

                <div className="workoutsRecent">
                    <p className="titleSection">Workouts recientes</p>
                    <WorkoutListThree workouts={workouts}></WorkoutListThree>
                </div>

                <p className="titleSection">Feedbacks</p>
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
